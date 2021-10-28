/*
  Search With Suggestions
*/

import React, { useState } from 'react';

// Antd
import { Input, AutoComplete } from "antd";

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

const { Search } = Input;

const searchTypingInterval = 700;

function SearchField({ 
  onSearch, 
  fetchSuggestions, 
  defaultOptions,
  loading,
  maxLength
}) {
  let typingTimer;

  // Local States
  const [search, setSearch] = useState("");

  const onSearchEnter = (e) => {
    e.preventDefault();
    onSearchData(e?.target?.value || "");
  }
  
  const onSearchData = (value) => {
    if(!!value){
      setSearch("");
      onSearch(value);
    }
  }

  const onSearchKeyUp = (e) => {
    let value = e?.target?.value;
    setSearch(value);
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => 
      fetchSearchSuggestions(value), 
      searchTypingInterval
    );
  }

  const fetchSearchSuggestions = (value) => {
    !!fetchSuggestions && fetchSuggestions(value)
  }

  const onSelect = (e) => {
    onSearchData(e);
  }

  return (
    <div>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{ width: 300 }}
        options={defaultOptions}
        onSelect={onSelect}
        maxLength={ maxLength }
      >
        <Search
          allowClear={true}
          placeholder={ LOCALIZATION.SEARCH_LOT_NO }
          onPressEnter={onSearchEnter}
          onSearch={ onSearchData }
          value={ search }
          onChange={e => setSearch(e?.target?.value)}
          onKeyUp={ onSearchKeyUp }
          onKeyDown={ e => clearTimeout(typingTimer) }
          loading={ loading }
          maxLength={ maxLength }
        />
      </AutoComplete>
    </div>
  );
}

export default SearchField;