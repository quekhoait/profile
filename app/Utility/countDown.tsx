import { useState, useEffect, useCallback } from "react";

export const useCountdown = (targetDate) => {
  // Hàm tính toán khoảng cách thời gian chính xác
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false,
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    // Cập nhật ngay lập tức khi targetDate thay đổi
    setTimeLeft(calculateTimeLeft());

    // Chạy vòng lặp mỗi 1 giây
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Xóa interval khi component đóng để tránh tốn RAM/Pin trình duyệt
    return () => clearInterval(intervalId);
  }, [targetDate, calculateTimeLeft]);


  const formatWithZero = (num) => String(num).padStart(2, "0");

  return {
    ...timeLeft,
    formattedHours: formatWithZero(timeLeft.hours),
    formattedMinutes: formatWithZero(timeLeft.minutes),
    formattedSeconds: formatWithZero(timeLeft.seconds),
  };
};