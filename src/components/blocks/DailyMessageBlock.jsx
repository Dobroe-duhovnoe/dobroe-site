import React from 'react';
import BaseBlock from './BaseBlock';
import { useState, useEffect } from 'react';
import { yearlyMessages } from '../../data/yearlyMessages';

const DailyMessageBlock = ({ blockNames, hideBlockInfo }) => {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Получаем текущую дату
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Обновляем каждую минуту
    return () => clearInterval(timer);
  }, []);

  const currentMonth = currentDate.getMonth() + 1; // JS месяцы 0-11, у нас 1-12
  const currentDay = currentDate.getDate();

  // Функция для проверки, является ли дата прошедшей
  const isDatePassed = (month, day) => {
    if (month < currentMonth) return true;
    if (month === currentMonth && day <= currentDay) return true;
    return false;
  };

  // Функция для получения ближайшей доступной даты
  const getNearestAvailableDate = () => {
    // Если есть сегодняшнее наставление
    if (yearlyMessages[currentMonth]?.days[currentDay - 1]) {
      return { month: currentMonth, day: currentDay };
    }
    
    // Ищем последнее доступное наставление
    for (let month = currentMonth; month >= 1; month--) {
      const monthData = yearlyMessages[month];
      if (monthData) {
        for (let day = month === currentMonth ? currentDay : monthData.days.length; day >= 1; day--) {
          if (isDatePassed(month, day)) {
            return { month, day };
          }
        }
      }
    }
    
    // Если ничего не найдено, возвращаем первое января
    return { month: 1, day: 1 };
  };

  // Инициализируем выбранную дату как ближайшую доступную
  useEffect(() => {
    const nearestDate = getNearestAvailableDate();
    setSelectedMonth(nearestDate.month);
    setSelectedDay(nearestDate.day);
  }, []);

  const handleMonthClick = (month) => {
    if (month < currentMonth || (month === currentMonth && isDatePassed(month, 1))) {
      setSelectedMonth(month);
      
      // Устанавливаем максимально возможный день для выбранного месяца
      const maxDay = yearlyMessages[month]?.days.length || 31;
      const lastAvailableDay = Math.min(
        month === currentMonth ? currentDay : maxDay,
        maxDay
      );
      setSelectedDay(lastAvailableDay);
    }
  };

  const handleDayClick = (day) => {
    if (isDatePassed(selectedMonth, day)) {
      setSelectedDay(day);
    }
  };

  const currentMessage = yearlyMessages[selectedMonth]?.days[selectedDay - 1];

  return (
    <BaseBlock title={blockNames.DAILY_MESSAGE} onClose={hideBlockInfo}>
      <div className="flex h-full flex-col">
        <div className="mb-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {Object.entries(yearlyMessages).map(([month, data]) => {
              const monthNum = Number(month);
              const isPastOrCurrent = monthNum < currentMonth || 
                (monthNum === currentMonth && isDatePassed(monthNum, 1));
              const isSelected = selectedMonth === monthNum;
              
              return (
                <button
                  key={month}
                  onClick={() => handleMonthClick(monthNum)}
                  disabled={!isPastOrCurrent}
                  className={`w-20 rounded px-3 py-1 text-xs transition-colors ${
                    isSelected
                      ? 'bg-[var(--color-accent-yellow)]'
                      : isPastOrCurrent
                      ? 'cursor-pointer bg-[var(--color-primary-light)] hover:opacity-90'
                      : 'cursor-not-allowed bg-gray-200 text-gray-400 opacity-50'
                  }`}
                  title={!isPastOrCurrent ? "Послание ещё не доступно" : ""}
                >
                  {data.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-1 text-xs">
            {yearlyMessages[selectedMonth]?.days.map((day) => {
              const isPastOrCurrent = isDatePassed(selectedMonth, day.day);
              const isSelected = selectedDay === day.day;
              const isToday = selectedMonth === currentMonth && day.day === currentDay;
              
              return (
                <button
                  key={day.day}
                  onClick={() => handleDayClick(day.day)}
                  disabled={!isPastOrCurrent}
                  className={`flex h-8 w-8 items-center justify-center rounded text-center transition-colors ${
                    isSelected
                      ? 'bg-[var(--color-accent-yellow)]'
                      : isToday
                      ? 'bg-blue-100 text-blue-600'
                      : isPastOrCurrent
                      ? 'cursor-pointer bg-[var(--color-primary-light)] hover:opacity-90'
                      : 'cursor-not-allowed bg-gray-200 text-gray-400 opacity-50'
                  }`}
                  title={!isPastOrCurrent ? "Послание ещё не доступно" : isToday ? "Сегодня" : ""}
                >
                  {day.day}
                </button>
              );
            })}
          </div>
        </div>

        {currentMessage && (
          <div className="flex-1 overflow-y-auto text-left leading-tight">
            <h3 className="mb-4 text-2xl leading-tight font-bold text-[var(--color-primary-dark)]">
              {currentMessage.title}
            </h3>

            <div className="mb-4 rounded-lg">
              <p className="text-[var(--color-accent-orange)] italic">
                {currentMessage.scripture}
              </p>
            </div>

            <div className="mb-6 text-gray-700">
              {currentMessage.text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-lg bg-[var(--color-background-light)] p-4">
              <h4 className="mb-2 font-bold text-[var(--color-primary-dark)]">
                Молитва:
              </h4>
              <p className="text-gray-700 italic">{currentMessage.prayer}</p>
            </div>
            
            {/* Индикатор, что это сегодняшнее наставление */}
            {selectedMonth === currentMonth && selectedDay === currentDay && (
              <div className="mt-4 text-center text-sm text-blue-600">
                📅 Сегодняшнее послание
              </div>
            )}
          </div>
        )}
      </div>
    </BaseBlock>
  );
};

export default DailyMessageBlock;
