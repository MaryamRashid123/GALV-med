/*
  Pageination on scrol
*/

import React, { useEffect } from 'react';

import { Skeleton } from 'antd';

// Components
import Loading from "@cattleview/web/src/components/Loading/Loading";
import EmptyData from "../Common/EmptyData";
import Page500 from "../ErrorPages/Page500";

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

function Pagination({ 
  loading, 
  pageNumber, 
  filterCount, 
  total, 
  totalFetchedRecords, 
  getData, 
  error, 
  errorMessage, 
  children 
}) {
  const trackScrolling = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      !error && !!getData && total > totalFetchedRecords && getData(parseInt((pageNumber || 0) + 1));
    }
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('scroll', trackScrolling);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('scroll', trackScrolling);
    };
  });

  const refresh = () => {
    !!getData && getData(0)
  }

  return (
    <div id="scrolableListing" className="scrolableListing">
      {/* Loading */}
      {!!loading && <Loading />}

      {/* Child Data */}
      {children}

      <Skeleton active loading={!!loading && pageNumber === 0 && totalFetchedRecords === 0} paragraph={true}/>

      {/* Empty Data */}
      {
        !loading && 
        !total && 
        !error && 
        <EmptyData 
          message={!!filterCount ? '' : (
            errorMessage || LOCALIZATION.NO_RECORD_AVAILABLE
          )} />}

      {/* Page 500 */}
      {!loading && pageNumber === 0 && !!error && <Page500 refresh={refresh} />}
    </div>
  );
}

export default Pagination;