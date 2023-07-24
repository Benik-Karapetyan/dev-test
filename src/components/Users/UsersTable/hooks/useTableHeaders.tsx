import type {HeaderItem} from '../UsersTable';

import {useMemo} from 'react';

import {getAddressText} from '../../../../utils/helpers';

export const useTableHeaders = () => {
  const headers: HeaderItem[] = useMemo(
    () => [
      {
        text: 'Full Name',
        value: 'name',
        sortable: true,
      },
      {
        text: 'Email Address',
        value: 'email',
      },
      {
        text: 'Address',
        value: ({address}) => {
          return (
            <div className="overflow-hidden whitespace-nowrap text-ellipsis max-h-[44px] -mr-3">
              {getAddressText(address)}
            </div>
          );
        },
        size: 100,
      },
    ],
    []
  );

  return {headers};
};
