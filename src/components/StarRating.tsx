'use client';

//hooks
import { useState } from 'react';

// img
import StarFilled from '@/assets/imgs/starFilled.svg';
import StarEmpty from '@/assets/imgs/starEmpty.svg';

interface StarRatingProps {
  value?: number;
  onChange?: (rating: number) => void;
  size?: number;
}
/**
 * 별점 컴포넌트
 * @param value - 초기 별점 으로 넣을 값.(완전 처음엔 0으로 설정 됨)
 * @param onChange - 값의 변경 함수
 * @param size - (반영 x 필요하면 사용)
 */
export const StarRating = ({ value = 0, onChange }: StarRatingProps) => {
  const [currentRating, setCurrentRating] = useState(value); // 현재 선택된 값.
  const [hoverRating, setHoverRating] = useState(0); //마우스 를 올렸을 때의 임시값
  //[confirm, setConfirm] =useState(); //점수 확정 상태

  const STARS = [1, 2, 3, 4, 5];

  const handleClick = (star: number) => {
    setCurrentRating(star);
    onChange?.(star);
  };

  return (
    <div>
      <div className='flex'>
        {STARS.map(star => (
          <button
            key={star}
            type='button'
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className='px-1'
          >
            {(hoverRating || currentRating) >= star ? (
              <div className='h-14 w-14'>
                <StarFilled />
              </div>
            ) : (
              <div className='h-14 w-14'>
                <StarEmpty />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
