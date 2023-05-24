import {
    UilClipboardAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
} from "@iconscout/react-unicons";


export const MaincardsData = [
    {
        title: "Static",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Static",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Static",
        color: {
            boxShadow: "0px 10px 20px 0px #279ab8",
            backGround: "#279ab8"
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Static",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Static",
        color: {
            boxShadow: "0px 10px 20px 0px #2cc285",
            backGround: "#2cc285"
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Static",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
];

export const PgOneCard = [
    {
        title: "Static", //დაფიქსირებული განაცხადების რაოდენობა
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "50,000",
        png: UilUsdSquare,
        series: [
            {
                name: "Static",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Static", //საშუალო შესრულებული მაჩვენებელი
        color: {
            boxShadow: "0px 10px 20px 0px #279ab8",
            backGround: "#279ab8"
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Static",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Static",//დარიცხული კომპენსაციები ლარში
        color: {
            boxShadow: "0px 10px 20px 0px #2cc285",
            backGround: "#2cc285"
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Static",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
];