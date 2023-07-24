import {useEffect} from 'react';
import {Icon} from '../../../primitives';

import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiPageFirst,
  mdiPageLast,
  mdiMinus,
} from '@mdi/js';

interface TableFooterProps {
  headersLength: number;
  page?: number;
  onPageChange?: (val: number) => void;
  pageCount?: number;
}

const TableFooter: React.FC<TableFooterProps> = ({
  headersLength,
  page = 1,
  onPageChange,
  pageCount,
}) => {
  const handlePrevClick = () => {
    onPageChange && onPageChange(page - 1);
  };

  const handleNextClick = () => {
    onPageChange && onPageChange(page + 1);
  };

  const handleFirstPageClick = () => {
    onPageChange && onPageChange(1);
  };

  const handleLastPageClick = () => {
    onPageChange && pageCount && onPageChange(pageCount);
  };

  useEffect(() => {
    if (pageCount && page > pageCount) onPageChange && onPageChange(1);
  }, [page, pageCount, onPageChange]);

  return (
    <tfoot className="bg-[#FBFBFB]">
      <tr>
        <td colSpan={headersLength} className="h-[98px] text-light-blue">
          <div className="flex items-center justify-end gap-x-6">
            <div className="flex items-center gap-x-4 -ml-2">
              <div className="flex gap-x-2">
                <button
                  className="shadow p-2 rounded-full disabled:opacity-40"
                  disabled={page < 2}
                  onClick={handleFirstPageClick}
                >
                  <Icon name={mdiPageFirst} />
                </button>
                <button
                  className="shadow p-2 rounded-full disabled:opacity-40"
                  disabled={page < 2}
                  onClick={handlePrevClick}
                >
                  <Icon name={mdiChevronLeft} />
                </button>
              </div>

              <div>
                {page} of {pageCount ? pageCount : <Icon name={mdiMinus} />}
              </div>

              <div className="flex gap-x-2">
                <button
                  className="shadow p-2 rounded-full disabled:opacity-40"
                  disabled={!pageCount || page === pageCount}
                  onClick={handleNextClick}
                >
                  <Icon name={mdiChevronRight} />
                </button>
                <button
                  className="shadow p-2 rounded-full disabled:opacity-40"
                  disabled={!pageCount || page === pageCount}
                  onClick={handleLastPageClick}
                >
                  <Icon name={mdiPageLast} />
                </button>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
