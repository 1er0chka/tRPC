import * as React from 'react';
import {action} from "@storybook/addon-actions";
import Search from "client/src/components/search/Search";

export default {
    title: "SearchField",
    component: Search,
    argTypes: {
        setSearchInfo: {action: 'setSearchInfo'},
    },
};

export const Default = () => <Search
    searchInfo={''}
    setSearchInfo={action('setSearchInfo')}
    onClick={() => alert('Button clicked!')}/>

export const WithInput  = () => <Search
    searchInfo={'Input example'}
    setSearchInfo={action('setSearchInfo')}
    onClick={() => alert('Button clicked!')}/>
