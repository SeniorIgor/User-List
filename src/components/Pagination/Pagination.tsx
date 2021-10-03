import { FC, MouseEventHandler, useMemo } from 'react';

import Style from './Pagination.module.sass';

interface Props {
  page: number;
  total: number;
  className: string;
  onChange: (page: number) => void;
}

const LIMIT = 10;

export const Pagination: FC<Props> = ({ page, total, className, onChange }) => {
  const totalPages = Math.ceil(total / LIMIT);

  const renderedPages = useMemo(
    () =>
      Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageIndex) => {
          const Type = page === pageIndex ? 'strong' : 'span';
          const hanleClick: MouseEventHandler<HTMLElement> = () => {
            if (pageIndex !== page) {
              onChange(pageIndex);
            }
          };

          return (
            <Type onClick={hanleClick} key={pageIndex} className={Style.item}>
              {pageIndex}
            </Type>
          );
        }
      ),
    [page, totalPages, onChange]
  );

  return <div className={className}>{renderedPages}</div>;
};
