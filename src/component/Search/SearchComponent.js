import React, {useEffect, useState} from "react";
import lunr from "lunr";
import {FiSearch} from 'react-icons/Fi';
import {Link} from 'gatsby'

const SearchComponent = props => {
    const {
        data: {
            allWordpressWpSearchResults: {
                edges: posts
            }
        }
    } = props;

    // Default props
    const minCharacters = props.minCharacters || 2;
    const contentCharacters = props.contentCharacters || 200;
    const maxResults = props.maxResults || 10;
    const placeholder = props.placeholder || "Search...";

    const [query,
        setQuery] = useState("");
    const [idx,
        setIdx] = useState(null);

    let results;
    if (idx && query) {
        results = idx
            .search(`*${query}*`)
            .slice(0, maxResults);
    }

    useEffect(() => {
        const idx = getIndex();
        setIdx(idx);
    }, []);

    const getIndex = () => {
        return lunr(function () {
            this.ref("id");
            this.field("title");
            this.field("content");
            this.field("path");

            posts.map(post => {
                return this.add({
                    id: post.node.id,
                    title: post.node.post_title,
                    content: post
                        .node
                        .searchData
                        .join("\n\n"),
                    path: post.node.pathname
                });
            });
        });
    };
    ////
    return (
        <div className="w-auto ">
            <div
                className="flex flex-row border-1 bg-white w-64 h-10 px-5  my-2 rounded-lg text-sm justify-between">
                <input
                    name='query'
                    onChange={e => setQuery(e.target.value)}
                    autoComplete='off'
                    placeholder={placeholder}
                    className="focus:outline-none  "/>
                <FiSearch className="focus:hidden my-auto text-gray-500 absolute-right"/>

            </div>

            {(query.length >= minCharacters) && (results.length !== 0)
                ? (
                    <div>

                        <div className="bg-white absolute  fixed py-8 rounded-lg pr-8 -ml-56 ">
                            <div className="max-w-2xl h-64 overflow-auto  ">
                                <ul className="px-8  ">
                                    {results && results.map(o => {
                                        const post = posts.filter(post => post.node.id === o.ref)[0];

                                        return (
                                            <li key={post.node.id} className=" hover:bg-green-100  ">
                                                <Link to={`/blog${post.node.pathname}`}>
                                                    <h4 className="text-bold text-blue-400 my-2" children={post.node.post_title}/>
                                                </Link>
                                                <div/> {post.node.searchData[0] && (<div
                                                    maxlength="20"
                                                    className="mt-2 mb-8"
                                                    dangerouslySetInnerHTML={{
                                                    __html: post
                                                        .node
                                                        .searchData[0]
                                                        .substring(0, contentCharacters) + "..."
                                                }}/>)}
                                                <hr className="mx-4 "/>
                                            </li>

                                        );
                                    })
}

                                </ul>
                            </div>

                        </div>
                    </div>

                )
                : (
                    <div>{((query.length !== 0) && (query.length > 3)) && (
                            <div className="bg-white w-auto h-auto py-4 px-4 rounded-lg">No results for 
                                <div className="inline text-blue-400 w-auto h-auto">
                                     "{ query}"</div>
                            </div>
                        )}</div>
                )}

        </div>
    );
};

export default SearchComponent;

