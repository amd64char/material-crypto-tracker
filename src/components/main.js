import React, { useState } from "react";
import FetchData from "../fetchData.js";

export default function Main(props) {
    
    const { apiBaseUrl, apiSecretValue } = props;
    
    let endpointUrl = apiBaseUrl + '/';
    let endpointHeader = new Headers({
        'Accept': 'application/json',
        'X-CMC_PRO_API_KEY': apiSecretValue,
    });
    console.log(endpointHeader.get('X-CMC_PRO_API_KEY'));

    //const data = FetchData(endpointUrl, endpointHeader, 'GET');
    const data = [
        {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "num_market_pairs": 7803,
            "date_added": "2013-04-28T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": 21000000,
            "circulating_supply": 17861425,
            "total_supply": 17861425,
            "platform": null,
            "cmc_rank": 1,
            "last_updated": "2019-08-06T16:58:32.000Z",
            "quote": {
                "USD": {
                    "price": 11786.6487894,
                    "volume_24h": 23455075436.3473,
                    "percent_change_1h": 0.563096,
                    "percent_change_24h": -0.154812,
                    "percent_change_7d": 22.6774,
                    "market_cap": 210526343353.2089,
                    "last_updated": "2019-08-06T16:58:32.000Z"
                }
            }
        },
        {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "num_market_pairs": 5531,
            "date_added": "2015-08-07T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "max_supply": null,
            "circulating_supply": 107210638.8115,
            "total_supply": 107210638.8115,
            "platform": null,
            "cmc_rank": 2,
            "last_updated": "2019-08-06T16:58:22.000Z",
            "quote": {
                "USD": {
                    "price": 230.144892297,
                    "volume_24h": 7633067534.413,
                    "percent_change_1h": 0.589269,
                    "percent_change_24h": -1.64679,
                    "percent_change_7d": 9.12839,
                    "market_cap": 24673980922.36524,
                    "last_updated": "2019-08-06T16:58:22.000Z"
                }
            }
        }
    ];
    
    return (
        <React.Fragment>
            <div className="card mb-4 wow fadeIn">
                <div className="card-body d-sm-flex justify-content-between">
                    <h4 className="mb-2 mb-sm-0 pt-1">
                        <span>Dashboard</span>
                    </h4>
                </div>
            </div>

            <div className="row wow fadeIn">
                <div className="col-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <table id="cryptoTable" className="table table-hover">
                                <thead className="blue-grey lighten-4">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    data.map(el => (
                                        <tr key={el.id}>
                                            <td>{el.cmc_rank}</td>
                                            <td>{el.name}</td>
                                            <td>{el.quote.USD.price}</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}