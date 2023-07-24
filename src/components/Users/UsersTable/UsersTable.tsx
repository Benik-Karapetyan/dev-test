import clsx from 'clsx';
import {useState} from 'react';
import {Icon, ProgressCircular} from '../../primitives';
import TableFooter from './components/TableFooter';

import {orderBy} from 'lodash';
import {mdiChevronDown, mdiChevronUp, mdiUnfoldMoreHorizontal} from '@mdi/js';

type SortDirection = 'asc' | 'desc' | '';

interface SortedColumn {
  direction: SortDirection;
  column: keyof UserItem | '';
}

export interface HeaderItem {
  text: string | (() => React.ReactNode);
  value: keyof UserItem | ((val: UserItem) => React.ReactNode);
  size?: number;
  sortable?: boolean;
}

export interface Address {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
}

export interface UserItem {
  id: number;
  name: string;
  email: string;
  address: Address;
}

interface UsersTableProps {
  className?: string;
  style?: React.CSSProperties;
  headers: HeaderItem[];
  items: UserItem[];
  height?: string | number;
  loading?: boolean;
  hideFooter?: boolean;
  page?: number;
  itemsPerPage?: number;
  pageCount?: number;
  onPageChange?: (val: number) => void;
  onRowClick: (userId: number) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({
  className,
  style,
  headers,
  items,
  height,
  loading,
  hideFooter,
  page,
  itemsPerPage = 4,
  pageCount,
  onPageChange,
  onRowClick,
}) => {
  const [innerPage, setInnerPage] = useState(1);
  const [sortedColumn, setSortedColumn] = useState<SortedColumn>({
    direction: '',
    column: '',
  });
  const calculatedPage = page || innerPage;
  const sliceStartIndex = (calculatedPage - 1) * itemsPerPage;
  const sortedItems = sortedColumn.direction
    ? orderBy(
        items,
        sortedColumn.column,
        sortedColumn.direction ? sortedColumn.direction : undefined
      )
    : items;
  const paginatedItems = sortedItems.slice(
    sliceStartIndex,
    sliceStartIndex + itemsPerPage
  );
  const calculatedPageCount =
    pageCount || Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (val: number) => {
    if (onPageChange) onPageChange(val);
    else setInnerPage(val);
  };

  const handleSortClick = (column: keyof UserItem) => {
    const newDirection =
      sortedColumn.direction === ''
        ? 'asc'
        : sortedColumn.direction === 'asc'
        ? 'desc'
        : '';
    setSortedColumn({direction: newDirection, column});
  };

  return (
    <div className={clsx(className, 'max-w-full leading-normal')}>
      <div style={{...style, height: height && `${height}px`}}>
        <table className="relative w-full border-spacing-0 text-light-blue">
          <thead>
            <tr>
              {headers.map(({text, value, size, sortable}, i) => (
                <th
                  key={i}
                  role="columnheader"
                  className={clsx(
                    'group overflow-hidden pr-3',
                    'h-[68px] select-none font-normal',
                    'pointer-events-auto outline-0',
                    sortable && 'cursor-pointer'
                  )}
                  style={{maxWidth: size}}
                  onClick={() =>
                    typeof value !== 'function' && handleSortClick(value)
                  }
                >
                  <div className="flex items-center">
                    {typeof text === 'function' ? (
                      <>{text()}</>
                    ) : (
                      <span className="opacity-40 group-hover:opacity-100 transition-all">
                        {text}
                      </span>
                    )}

                    {sortable && (
                      <Icon
                        name={
                          sortedColumn.direction === 'asc'
                            ? mdiChevronDown
                            : sortedColumn.direction === 'desc'
                            ? mdiChevronUp
                            : mdiUnfoldMoreHorizontal
                        }
                        className={clsx(
                          'ml-2 opacity-40 group-hover:opacity-100 transition-all'
                        )}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={headers.length} className="h-[98px] text-center">
                  <ProgressCircular indeterminate size="40" />
                </td>
              </tr>
            ) : !items?.length ? (
              <tr>
                <td
                  colSpan={headers.length}
                  className="h-[98px] font-semibold text-center"
                >
                  No data available
                </td>
              </tr>
            ) : (
              <>
                {paginatedItems.map((item, i) => (
                  <tr
                    key={i}
                    className="hover:bg-[#54658e1a] cursor-pointer"
                    onClick={() => onRowClick(item.id)}
                  >
                    {headers.map(({value, size}, hi) => (
                      <td
                        key={hi}
                        className={clsx(
                          'group border-b-[1px] border-[#b2dfdbb3]',
                          'h-[68px] pr-3'
                        )}
                        style={{maxWidth: size}}
                      >
                        {typeof value === 'function'
                          ? value(item)
                          : value !== 'address' && item[value]}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>

          {!hideFooter && (
            <TableFooter
              headersLength={headers.length}
              page={calculatedPage}
              onPageChange={handlePageChange}
              pageCount={calculatedPageCount}
            />
          )}
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
