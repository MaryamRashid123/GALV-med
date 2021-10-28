/*
  Page Detail
*/

import React from 'react';

import { Skeleton } from 'antd';

// Components
import Loading from "@cattleview/web/src/components/Loading/Loading";

function PageDetail({ loading, children }) {

  return (
    <div>
      {/* Loading */}
      { !!loading && <Loading /> }

      {/* Child Data */}
      { !loading && children }

      <Skeleton active loading= { !!loading }/>
    </div>
  );
}

export default PageDetail;