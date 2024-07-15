var input = document.querySelector("input");

var beforeUnloadHander = function (e) {
    e.preventDefault();
    e.returnValue = true;
}

input.addEventListener("input", function (e) {
    var value = e.target.value;
    var defaultValue = e.target.defaultValue;
    if (value !== defaultValue) {
        window.addEventListener("beforeunload", beforeUnloadHander);
    }
    else {
        window.removeEventListener("beforeunload", beforeUnloadHander);
    }
});
var object = {
    "err": 0,
    "msg": "Success",
    "data": {
        "sentences": [
            {
                "words": [
                    {
                        "startTime": 22809,
                        "endTime": 23219,
                        "data": "Em"
                    },
                    {
                        "startTime": 23219,
                        "endTime": 23439,
                        "data": "là"
                    },
                    {
                        "startTime": 23439,
                        "endTime": 23769,
                        "data": "ai"
                    },
                    {
                        "startTime": 23769,
                        "endTime": 23889,
                        "data": "từ"
                    },
                    {
                        "startTime": 24339,
                        "endTime": 24449,
                        "data": "đâu"
                    },
                    {
                        "startTime": 24449,
                        "endTime": 24759,
                        "data": "bước"
                    },
                    {
                        "startTime": 24759,
                        "endTime": 25129,
                        "data": "đến"
                    },
                    {
                        "startTime": 25129,
                        "endTime": 25419,
                        "data": "nơi"
                    },
                    {
                        "startTime": 25419,
                        "endTime": 25449,
                        "data": "đây"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 25709,
                        "endTime": 26079,
                        "data": "Dịu"
                    },
                    {
                        "startTime": 26079,
                        "endTime": 26369,
                        "data": "dàng"
                    },
                    {
                        "startTime": 26369,
                        "endTime": 26640,
                        "data": "chân"
                    },
                    {
                        "startTime": 26650,
                        "endTime": 26800,
                        "data": "phương"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 28059,
                        "endTime": 28500,
                        "data": "Em"
                    },
                    {
                        "startTime": 28500,
                        "endTime": 28680,
                        "data": "là"
                    },
                    {
                        "startTime": 28680,
                        "endTime": 29010,
                        "data": "ai"
                    },
                    {
                        "startTime": 29010,
                        "endTime": 29290,
                        "data": "tựa"
                    },
                    {
                        "startTime": 29290,
                        "endTime": 29700,
                        "data": "như"
                    },
                    {
                        "startTime": 29710,
                        "endTime": 29970,
                        "data": "ánh"
                    },
                    {
                        "startTime": 29980,
                        "endTime": 30300,
                        "data": "nắng"
                    },
                    {
                        "startTime": 30300,
                        "endTime": 30599,
                        "data": "ban"
                    },
                    {
                        "startTime": 30599,
                        "endTime": 30789,
                        "data": "mai"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 30909,
                        "endTime": 31260,
                        "data": "Ngọt"
                    },
                    {
                        "startTime": 31260,
                        "endTime": 31549,
                        "data": "ngào"
                    },
                    {
                        "startTime": 31559,
                        "endTime": 31870,
                        "data": "trong"
                    },
                    {
                        "startTime": 31870,
                        "endTime": 32010,
                        "data": "sương"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 32759,
                        "endTime": 32789,
                        "data": "Ngắm"
                    },
                    {
                        "startTime": 33469,
                        "endTime": 33849,
                        "data": "em"
                    },
                    {
                        "startTime": 33849,
                        "endTime": 34150,
                        "data": "thật"
                    },
                    {
                        "startTime": 35259,
                        "endTime": 35729,
                        "data": "lâu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 36139,
                        "endTime": 36489,
                        "data": "Con"
                    },
                    {
                        "startTime": 36489,
                        "endTime": 36799,
                        "data": "tim"
                    },
                    {
                        "startTime": 36809,
                        "endTime": 37139,
                        "data": "anh"
                    },
                    {
                        "startTime": 37149,
                        "endTime": 37459,
                        "data": "yếu"
                    },
                    {
                        "startTime": 37459,
                        "endTime": 37649,
                        "data": "mềm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 38419,
                        "endTime": 38599,
                        "data": "Đắm"
                    },
                    {
                        "startTime": 38659,
                        "endTime": 39069,
                        "data": "say"
                    },
                    {
                        "startTime": 39069,
                        "endTime": 39380,
                        "data": "từ"
                    },
                    {
                        "startTime": 39390,
                        "endTime": 39620,
                        "data": "phút"
                    },
                    {
                        "startTime": 39620,
                        "endTime": 40020,
                        "data": "đó"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 40409,
                        "endTime": 40690,
                        "data": "Từng"
                    },
                    {
                        "startTime": 40690,
                        "endTime": 40839,
                        "data": "giây"
                    },
                    {
                        "startTime": 40849,
                        "endTime": 41349,
                        "data": "trôi"
                    },
                    {
                        "startTime": 41359,
                        "endTime": 41699,
                        "data": "yêu"
                    },
                    {
                        "startTime": 41699,
                        "endTime": 41899,
                        "data": "thêm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 43709,
                        "endTime": 44129,
                        "data": "Bao"
                    },
                    {
                        "startTime": 44129,
                        "endTime": 44249,
                        "data": "ngày"
                    },
                    {
                        "startTime": 44340,
                        "endTime": 44659,
                        "data": "qua"
                    },
                    {
                        "startTime": 44659,
                        "endTime": 44729,
                        "data": "bình"
                    },
                    {
                        "startTime": 45119,
                        "endTime": 45199,
                        "data": "minh"
                    },
                    {
                        "startTime": 45299,
                        "endTime": 45619,
                        "data": "đánh"
                    },
                    {
                        "startTime": 45619,
                        "endTime": 45719,
                        "data": "thức"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 45859,
                        "endTime": 46239,
                        "data": "Xua"
                    },
                    {
                        "startTime": 46239,
                        "endTime": 46509,
                        "data": "tan"
                    },
                    {
                        "startTime": 46739,
                        "endTime": 46960,
                        "data": "bộn"
                    },
                    {
                        "startTime": 47210,
                        "endTime": 47230,
                        "data": "bề"
                    },
                    {
                        "startTime": 47230,
                        "endTime": 47610,
                        "data": "nơi"
                    },
                    {
                        "startTime": 47620,
                        "endTime": 47960,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 48909,
                        "endTime": 49349,
                        "data": "Bao"
                    },
                    {
                        "startTime": 49349,
                        "endTime": 49449,
                        "data": "ngày"
                    },
                    {
                        "startTime": 49509,
                        "endTime": 49849,
                        "data": "qua"
                    },
                    {
                        "startTime": 49849,
                        "endTime": 49950,
                        "data": "niềm"
                    },
                    {
                        "startTime": 50329,
                        "endTime": 50440,
                        "data": "thương"
                    },
                    {
                        "startTime": 50489,
                        "endTime": 50789,
                        "data": "nỗi"
                    },
                    {
                        "startTime": 50789,
                        "endTime": 50999,
                        "data": "nhớ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 51149,
                        "endTime": 51419,
                        "data": "Bay"
                    },
                    {
                        "startTime": 51419,
                        "endTime": 51810,
                        "data": "theo"
                    },
                    {
                        "startTime": 51810,
                        "endTime": 52090,
                        "data": "bầu"
                    },
                    {
                        "startTime": 52100,
                        "endTime": 52450,
                        "data": "trời"
                    },
                    {
                        "startTime": 52450,
                        "endTime": 52690,
                        "data": "trong"
                    },
                    {
                        "startTime": 52700,
                        "endTime": 53170,
                        "data": "xanh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 53649,
                        "endTime": 53679,
                        "data": "Lướt"
                    },
                    {
                        "startTime": 54439,
                        "endTime": 54609,
                        "data": "đôi"
                    },
                    {
                        "startTime": 55019,
                        "endTime": 55079,
                        "data": "hàng"
                    },
                    {
                        "startTime": 56039,
                        "endTime": 56629,
                        "data": "mi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 56899,
                        "endTime": 57380,
                        "data": "Mong"
                    },
                    {
                        "startTime": 57380,
                        "endTime": 57620,
                        "data": "manh"
                    },
                    {
                        "startTime": 57710,
                        "endTime": 57970,
                        "data": "anh"
                    },
                    {
                        "startTime": 57970,
                        "endTime": 58210,
                        "data": "thẫn"
                    },
                    {
                        "startTime": 59240,
                        "endTime": 59260,
                        "data": "thờ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 59599,
                        "endTime": 59849,
                        "data": "Muốn"
                    },
                    {
                        "startTime": 59849,
                        "endTime": 59879,
                        "data": "hôn"
                    },
                    {
                        "startTime": 59879,
                        "endTime": 59899,
                        "data": "nhẹ"
                    },
                    {
                        "startTime": 60249,
                        "endTime": 60469,
                        "data": "mái"
                    },
                    {
                        "startTime": 60469,
                        "endTime": 60630,
                        "data": "tóc"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 61299,
                        "endTime": 61579,
                        "data": "Bờ"
                    },
                    {
                        "startTime": 61579,
                        "endTime": 61769,
                        "data": "môi"
                    },
                    {
                        "startTime": 61799,
                        "endTime": 61879,
                        "data": "em"
                    },
                    {
                        "startTime": 62229,
                        "endTime": 62609,
                        "data": "anh"
                    },
                    {
                        "startTime": 62609,
                        "endTime": 62839,
                        "data": "mơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 64530,
                        "endTime": 67210,
                        "data": "Cầm tay anh dựa vai anh "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 67589,
                        "endTime": 67609,
                        "data": "Kề"
                    },
                    {
                        "startTime": 67609,
                        "endTime": 67639,
                        "data": "bên"
                    },
                    {
                        "startTime": 67639,
                        "endTime": 67659,
                        "data": "anh"
                    },
                    {
                        "startTime": 67659,
                        "endTime": 67689,
                        "data": "nơi"
                    },
                    {
                        "startTime": 67689,
                        "endTime": 67759,
                        "data": "này"
                    },
                    {
                        "startTime": 68609,
                        "endTime": 69039,
                        "data": "có"
                    },
                    {
                        "startTime": 69039,
                        "endTime": 69299,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 69929,
                        "endTime": 69949,
                        "data": "Gió"
                    },
                    {
                        "startTime": 69949,
                        "endTime": 69979,
                        "data": "mang"
                    },
                    {
                        "startTime": 69979,
                        "endTime": 70059,
                        "data": "câu"
                    },
                    {
                        "startTime": 70059,
                        "endTime": 70409,
                        "data": "tình"
                    },
                    {
                        "startTime": 70409,
                        "endTime": 70539,
                        "data": "ca"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 70990,
                        "endTime": 72100,
                        "data": "Ngàn ánh sao vụt qua "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 71999,
                        "endTime": 72139,
                        "data": "Nhẹ"
                    },
                    {
                        "startTime": 72139,
                        "endTime": 72159,
                        "data": "ôm"
                    },
                    {
                        "startTime": 72159,
                        "endTime": 72189,
                        "data": "lấy"
                    },
                    {
                        "startTime": 72909,
                        "endTime": 73139,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 74659,
                        "endTime": 74689,
                        "data": "Cầm"
                    },
                    {
                        "startTime": 75320,
                        "endTime": 75570,
                        "data": "tay"
                    },
                    {
                        "startTime": 75570,
                        "endTime": 75589,
                        "data": "anh"
                    },
                    {
                        "startTime": 76449,
                        "endTime": 76609,
                        "data": "dựa"
                    },
                    {
                        "startTime": 76609,
                        "endTime": 76789,
                        "data": "vai"
                    },
                    {
                        "startTime": 77069,
                        "endTime": 77109,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 78149,
                        "endTime": 78169,
                        "data": "Kề"
                    },
                    {
                        "startTime": 78169,
                        "endTime": 78199,
                        "data": "bên"
                    },
                    {
                        "startTime": 78199,
                        "endTime": 78229,
                        "data": "anh"
                    },
                    {
                        "startTime": 78559,
                        "endTime": 78729,
                        "data": "nơi"
                    },
                    {
                        "startTime": 78729,
                        "endTime": 78759,
                        "data": "này"
                    },
                    {
                        "startTime": 79059,
                        "endTime": 79229,
                        "data": "có"
                    },
                    {
                        "startTime": 79229,
                        "endTime": 79249,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 79920,
                        "endTime": 81370,
                        "data": "Khép đôi mi thật lâu "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 80940,
                        "endTime": 80979,
                        "data": "Nguyện"
                    },
                    {
                        "startTime": 81490,
                        "endTime": 81650,
                        "data": "mãi"
                    },
                    {
                        "startTime": 81650,
                        "endTime": 81820,
                        "data": "bên"
                    },
                    {
                        "startTime": 81820,
                        "endTime": 82160,
                        "data": "cạnh"
                    },
                    {
                        "startTime": 82160,
                        "endTime": 82300,
                        "data": "nhau"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 82069,
                        "endTime": 82089,
                        "data": "Yêu"
                    },
                    {
                        "startTime": 82609,
                        "endTime": 82819,
                        "data": "say"
                    },
                    {
                        "startTime": 82819,
                        "endTime": 82929,
                        "data": "đắm"
                    },
                    {
                        "startTime": 82979,
                        "endTime": 83149,
                        "data": "như"
                    },
                    {
                        "startTime": 83149,
                        "endTime": 83490,
                        "data": "ngày"
                    },
                    {
                        "startTime": 83500,
                        "endTime": 83769,
                        "data": "đầu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 85230,
                        "endTime": 88420,
                        "data": "Mùa xuân đến bình yên "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 88269,
                        "endTime": 88839,
                        "data": "Cho"
                    },
                    {
                        "startTime": 88839,
                        "endTime": 88859,
                        "data": "anh"
                    },
                    {
                        "startTime": 88859,
                        "endTime": 88889,
                        "data": "những"
                    },
                    {
                        "startTime": 88889,
                        "endTime": 88919,
                        "data": "giấc"
                    },
                    {
                        "startTime": 88919,
                        "endTime": 88939,
                        "data": "mơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 90909,
                        "endTime": 90959,
                        "data": "Hạ"
                    },
                    {
                        "startTime": 90959,
                        "endTime": 90989,
                        "data": "lưu"
                    },
                    {
                        "startTime": 90989,
                        "endTime": 91289,
                        "data": "giữ"
                    },
                    {
                        "startTime": 91289,
                        "endTime": 91469,
                        "data": "ngày"
                    },
                    {
                        "startTime": 91469,
                        "endTime": 91489,
                        "data": "mưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 93520,
                        "endTime": 93709,
                        "data": "Ngọt"
                    },
                    {
                        "startTime": 93869,
                        "endTime": 94229,
                        "data": "ngào"
                    },
                    {
                        "startTime": 95499,
                        "endTime": 95529,
                        "data": "nên"
                    },
                    {
                        "startTime": 95529,
                        "endTime": 95549,
                        "data": "thơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 95650,
                        "endTime": 98770,
                        "data": "Mùa thu lá vàng rơi "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 98809,
                        "endTime": 98949,
                        "data": "Đông"
                    },
                    {
                        "startTime": 99029,
                        "endTime": 99259,
                        "data": "sang"
                    },
                    {
                        "startTime": 99459,
                        "endTime": 99589,
                        "data": "anh"
                    },
                    {
                        "startTime": 99999,
                        "endTime": 100129,
                        "data": "nhớ"
                    },
                    {
                        "startTime": 100129,
                        "endTime": 100249,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 100409,
                        "endTime": 100439,
                        "data": "Tình"
                    },
                    {
                        "startTime": 101109,
                        "endTime": 101330,
                        "data": "yêu"
                    },
                    {
                        "startTime": 101400,
                        "endTime": 101690,
                        "data": "bé"
                    },
                    {
                        "startTime": 102810,
                        "endTime": 102919,
                        "data": "nhỏ"
                    },
                    {
                        "startTime": 103310,
                        "endTime": 103540,
                        "data": "xin"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 103959,
                        "endTime": 104299,
                        "data": "Dành"
                    },
                    {
                        "startTime": 104299,
                        "endTime": 104529,
                        "data": "tặng"
                    },
                    {
                        "startTime": 104679,
                        "endTime": 104989,
                        "data": "riêng"
                    },
                    {
                        "startTime": 105489,
                        "endTime": 106039,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 117189,
                        "endTime": 117389,
                        "data": "Còn"
                    },
                    {
                        "startTime": 117389,
                        "endTime": 117619,
                        "data": "đó"
                    },
                    {
                        "startTime": 118179,
                        "endTime": 118209,
                        "data": "tiếng"
                    },
                    {
                        "startTime": 118209,
                        "endTime": 118239,
                        "data": "nói"
                    },
                    {
                        "startTime": 118239,
                        "endTime": 118259,
                        "data": "ấy"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 117939,
                        "endTime": 117969,
                        "data": "Bên"
                    },
                    {
                        "startTime": 118329,
                        "endTime": 118469,
                        "data": "tai"
                    },
                    {
                        "startTime": 118699,
                        "endTime": 118829,
                        "data": "vấn"
                    },
                    {
                        "startTime": 118829,
                        "endTime": 118859,
                        "data": "vương"
                    },
                    {
                        "startTime": 118969,
                        "endTime": 119159,
                        "data": "bao"
                    },
                    {
                        "startTime": 119159,
                        "endTime": 119209,
                        "data": "ngày"
                    },
                    {
                        "startTime": 119349,
                        "endTime": 119759,
                        "data": "qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 120079,
                        "endTime": 120160,
                        "data": "Ánh"
                    },
                    {
                        "startTime": 120270,
                        "endTime": 120580,
                        "data": "mắt"
                    },
                    {
                        "startTime": 120590,
                        "endTime": 120729,
                        "data": "bối"
                    },
                    {
                        "startTime": 120729,
                        "endTime": 120759,
                        "data": "rối"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 120869,
                        "endTime": 121229,
                        "data": "Nhớ"
                    },
                    {
                        "startTime": 121229,
                        "endTime": 121459,
                        "data": "thương"
                    },
                    {
                        "startTime": 121839,
                        "endTime": 121859,
                        "data": "bao"
                    },
                    {
                        "startTime": 121859,
                        "endTime": 121899,
                        "data": "ngày"
                    },
                    {
                        "startTime": 121899,
                        "endTime": 122119,
                        "data": "qua"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 122759,
                        "endTime": 122929,
                        "data": "Yêu"
                    },
                    {
                        "startTime": 122929,
                        "endTime": 123059,
                        "data": "em"
                    },
                    {
                        "startTime": 123059,
                        "endTime": 123159,
                        "data": "anh"
                    },
                    {
                        "startTime": 123389,
                        "endTime": 123619,
                        "data": "thẫn"
                    },
                    {
                        "startTime": 123619,
                        "endTime": 123639,
                        "data": "thờ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 123369,
                        "endTime": 123399,
                        "data": "Con"
                    },
                    {
                        "startTime": 123889,
                        "endTime": 124040,
                        "data": "tim"
                    },
                    {
                        "startTime": 124040,
                        "endTime": 124189,
                        "data": "bâng"
                    },
                    {
                        "startTime": 124189,
                        "endTime": 124310,
                        "data": "khuâng"
                    },
                    {
                        "startTime": 124380,
                        "endTime": 124469,
                        "data": "đâu"
                    },
                    {
                        "startTime": 124529,
                        "endTime": 124739,
                        "data": "có"
                    },
                    {
                        "startTime": 124739,
                        "endTime": 124819,
                        "data": "ngờ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 124969,
                        "endTime": 125269,
                        "data": "Chẳng"
                    },
                    {
                        "startTime": 125269,
                        "endTime": 125399,
                        "data": "bao"
                    },
                    {
                        "startTime": 125399,
                        "endTime": 125560,
                        "data": "giờ"
                    },
                    {
                        "startTime": 125670,
                        "endTime": 125849,
                        "data": "phải"
                    },
                    {
                        "startTime": 125849,
                        "endTime": 126029,
                        "data": "mong"
                    },
                    {
                        "startTime": 126039,
                        "endTime": 126229,
                        "data": "chờ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 126480,
                        "endTime": 127840,
                        "data": "Đợi ai trong chiều hoàng hôn mờ "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 127840,
                        "endTime": 129150,
                        "data": "Đắm chìm hoà vào vần thơ "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 129150,
                        "endTime": 130400,
                        "data": "Ngắm nhìn khờ dại mộng mơ "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 130400,
                        "endTime": 131660,
                        "data": "Đừng bước vội vàng rồi làm ngơ "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 131660,
                        "endTime": 133000,
                        "data": "Lạnh lùng đó làm bộ dạng thờ ơ "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 133000,
                        "endTime": 133900,
                        "data": "Nhìn anh đi em nha "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 134299,
                        "endTime": 134329,
                        "data": "Hướng"
                    },
                    {
                        "startTime": 134329,
                        "endTime": 134349,
                        "data": "nụ"
                    },
                    {
                        "startTime": 134349,
                        "endTime": 134379,
                        "data": "cười"
                    },
                    {
                        "startTime": 134379,
                        "endTime": 134509,
                        "data": "cho"
                    },
                    {
                        "startTime": 134509,
                        "endTime": 134699,
                        "data": "riêng"
                    },
                    {
                        "startTime": 134699,
                        "endTime": 134829,
                        "data": "anh"
                    },
                    {
                        "startTime": 134829,
                        "endTime": 134849,
                        "data": "nha"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 135100,
                        "endTime": 135820,
                        "data": "Đơn giản là yêu "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 135899,
                        "endTime": 136110,
                        "data": "Con"
                    },
                    {
                        "startTime": 136110,
                        "endTime": 136280,
                        "data": "tim"
                    },
                    {
                        "startTime": 136280,
                        "endTime": 136339,
                        "data": "anh"
                    },
                    {
                        "startTime": 136440,
                        "endTime": 136619,
                        "data": "lên"
                    },
                    {
                        "startTime": 136619,
                        "endTime": 136889,
                        "data": "tiếng"
                    },
                    {
                        "startTime": 136899,
                        "endTime": 137339,
                        "data": "thôi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 139099,
                        "endTime": 139129,
                        "data": "Cầm"
                    },
                    {
                        "startTime": 139129,
                        "endTime": 139229,
                        "data": "tay"
                    },
                    {
                        "startTime": 139289,
                        "endTime": 140120,
                        "data": "anh"
                    },
                    {
                        "startTime": 140120,
                        "endTime": 140140,
                        "data": "dựa"
                    },
                    {
                        "startTime": 140140,
                        "endTime": 140169,
                        "data": "vai"
                    },
                    {
                        "startTime": 140169,
                        "endTime": 140199,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 139909,
                        "endTime": 139929,
                        "data": "Kề"
                    },
                    {
                        "startTime": 140540,
                        "endTime": 140730,
                        "data": "bên"
                    },
                    {
                        "startTime": 140730,
                        "endTime": 140859,
                        "data": "anh"
                    },
                    {
                        "startTime": 141259,
                        "endTime": 141359,
                        "data": "nơi"
                    },
                    {
                        "startTime": 141369,
                        "endTime": 141649,
                        "data": "này"
                    },
                    {
                        "startTime": 141649,
                        "endTime": 141869,
                        "data": "có"
                    },
                    {
                        "startTime": 142040,
                        "endTime": 142320,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 142469,
                        "endTime": 142599,
                        "data": "Gió"
                    },
                    {
                        "startTime": 143009,
                        "endTime": 143039,
                        "data": "mang"
                    },
                    {
                        "startTime": 143039,
                        "endTime": 143099,
                        "data": "câu"
                    },
                    {
                        "startTime": 143129,
                        "endTime": 143469,
                        "data": "tình"
                    },
                    {
                        "startTime": 143469,
                        "endTime": 143739,
                        "data": "ca"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 144010,
                        "endTime": 145090,
                        "data": "Ngàn ánh sao vụt qua "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 145090,
                        "endTime": 147460,
                        "data": "Nhẹ ôm lấy em "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 148040,
                        "endTime": 150660,
                        "data": "Cầm tay anh dựa vai anh "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 150239,
                        "endTime": 150259,
                        "data": "Kề"
                    },
                    {
                        "startTime": 150649,
                        "endTime": 150739,
                        "data": "bên"
                    },
                    {
                        "startTime": 150739,
                        "endTime": 150759,
                        "data": "anh"
                    },
                    {
                        "startTime": 151579,
                        "endTime": 151789,
                        "data": "nơi"
                    },
                    {
                        "startTime": 151789,
                        "endTime": 152059,
                        "data": "này"
                    },
                    {
                        "startTime": 152059,
                        "endTime": 152489,
                        "data": "có"
                    },
                    {
                        "startTime": 152489,
                        "endTime": 152630,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 152950,
                        "endTime": 154460,
                        "data": "Khép đôi mi thật lâu "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 154460,
                        "endTime": 155570,
                        "data": "Nguyện mãi bên cạnh nhau "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 155979,
                        "endTime": 155999,
                        "data": "Yêu"
                    },
                    {
                        "startTime": 155999,
                        "endTime": 156019,
                        "data": "say"
                    },
                    {
                        "startTime": 156019,
                        "endTime": 156049,
                        "data": "đắm"
                    },
                    {
                        "startTime": 156049,
                        "endTime": 156199,
                        "data": "như"
                    },
                    {
                        "startTime": 156199,
                        "endTime": 156519,
                        "data": "ngày"
                    },
                    {
                        "startTime": 156519,
                        "endTime": 156709,
                        "data": "đầu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 158270,
                        "endTime": 161420,
                        "data": "Mùa xuân đến bình yên "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 161319,
                        "endTime": 161819,
                        "data": "Cho"
                    },
                    {
                        "startTime": 161819,
                        "endTime": 161839,
                        "data": "anh"
                    },
                    {
                        "startTime": 162059,
                        "endTime": 162329,
                        "data": "những"
                    },
                    {
                        "startTime": 162329,
                        "endTime": 162710,
                        "data": "giấc"
                    },
                    {
                        "startTime": 162710,
                        "endTime": 162750,
                        "data": "mơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 162930,
                        "endTime": 162949,
                        "data": "Hạ"
                    },
                    {
                        "startTime": 163960,
                        "endTime": 163989,
                        "data": "lưu"
                    },
                    {
                        "startTime": 163989,
                        "endTime": 164340,
                        "data": "giữ"
                    },
                    {
                        "startTime": 166489,
                        "endTime": 166519,
                        "data": "ngày"
                    },
                    {
                        "startTime": 166519,
                        "endTime": 166539,
                        "data": "mưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 166569,
                        "endTime": 166770,
                        "data": "Ngọt"
                    },
                    {
                        "startTime": 166929,
                        "endTime": 167319,
                        "data": "ngào"
                    },
                    {
                        "startTime": 168609,
                        "endTime": 168639,
                        "data": "nên"
                    },
                    {
                        "startTime": 168639,
                        "endTime": 168659,
                        "data": "thơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 168739,
                        "endTime": 168799,
                        "data": "Mùa"
                    },
                    {
                        "startTime": 168799,
                        "endTime": 168819,
                        "data": "thu"
                    },
                    {
                        "startTime": 169209,
                        "endTime": 169519,
                        "data": "lá"
                    },
                    {
                        "startTime": 169769,
                        "endTime": 169899,
                        "data": "vàng"
                    },
                    {
                        "startTime": 171749,
                        "endTime": 171779,
                        "data": "rơi"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 171849,
                        "endTime": 171989,
                        "data": "Đông"
                    },
                    {
                        "startTime": 172089,
                        "endTime": 172439,
                        "data": "sang"
                    },
                    {
                        "startTime": 172499,
                        "endTime": 172799,
                        "data": "anh"
                    },
                    {
                        "startTime": 172799,
                        "endTime": 173209,
                        "data": "nhớ"
                    },
                    {
                        "startTime": 173209,
                        "endTime": 173410,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 173840,
                        "endTime": 177020,
                        "data": "Tình yêu bé nhỏ xin "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 177049,
                        "endTime": 177359,
                        "data": "Dành"
                    },
                    {
                        "startTime": 177359,
                        "endTime": 177579,
                        "data": "tặng"
                    },
                    {
                        "startTime": 177719,
                        "endTime": 178009,
                        "data": "riêng"
                    },
                    {
                        "startTime": 178509,
                        "endTime": 179049,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 182590,
                        "endTime": 184460,
                        "data": "Nhớ thương em "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 188699,
                        "endTime": 188719,
                        "data": "Nhớ"
                    },
                    {
                        "startTime": 188719,
                        "endTime": 188749,
                        "data": "thương"
                    },
                    {
                        "startTime": 189179,
                        "endTime": 189789,
                        "data": "em"
                    },
                    {
                        "startTime": 189789,
                        "endTime": 189819,
                        "data": "lắm"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 192510,
                        "endTime": 192659,
                        "data": "Phía"
                    },
                    {
                        "startTime": 192659,
                        "endTime": 192989,
                        "data": "sau"
                    },
                    {
                        "startTime": 192989,
                        "endTime": 193349,
                        "data": "chân"
                    },
                    {
                        "startTime": 193459,
                        "endTime": 193749,
                        "data": "trời"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 194649,
                        "endTime": 195070,
                        "data": "Có"
                    },
                    {
                        "startTime": 195070,
                        "endTime": 195300,
                        "data": "ai"
                    },
                    {
                        "startTime": 195300,
                        "endTime": 195610,
                        "data": "băng"
                    },
                    {
                        "startTime": 195610,
                        "endTime": 195729,
                        "data": "qua"
                    },
                    {
                        "startTime": 196159,
                        "endTime": 196189,
                        "data": "lối"
                    },
                    {
                        "startTime": 196189,
                        "endTime": 196279,
                        "data": "về"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 196790,
                        "endTime": 196890,
                        "data": "Cùng"
                    },
                    {
                        "startTime": 196960,
                        "endTime": 197259,
                        "data": "em"
                    },
                    {
                        "startTime": 197259,
                        "endTime": 197319,
                        "data": "đi"
                    },
                    {
                        "startTime": 197390,
                        "endTime": 197760,
                        "data": "trên"
                    },
                    {
                        "startTime": 197760,
                        "endTime": 197980,
                        "data": "đoạn"
                    },
                    {
                        "startTime": 197980,
                        "endTime": 198240,
                        "data": "đường"
                    },
                    {
                        "startTime": 198250,
                        "endTime": 198819,
                        "data": "dài"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 200190,
                        "endTime": 202870,
                        "data": "Cầm tay anh dựa vai anh "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 203039,
                        "endTime": 203139,
                        "data": "Kề"
                    },
                    {
                        "startTime": 203139,
                        "endTime": 203329,
                        "data": "bên"
                    },
                    {
                        "startTime": 203329,
                        "endTime": 203349,
                        "data": "anh"
                    },
                    {
                        "startTime": 203349,
                        "endTime": 203399,
                        "data": "nơi"
                    },
                    {
                        "startTime": 203399,
                        "endTime": 203429,
                        "data": "này"
                    },
                    {
                        "startTime": 204289,
                        "endTime": 204679,
                        "data": "có"
                    },
                    {
                        "startTime": 204679,
                        "endTime": 204899,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 204689,
                        "endTime": 204709,
                        "data": "Gió"
                    },
                    {
                        "startTime": 204709,
                        "endTime": 204750,
                        "data": "mang"
                    },
                    {
                        "startTime": 205589,
                        "endTime": 205729,
                        "data": "câu"
                    },
                    {
                        "startTime": 205729,
                        "endTime": 206059,
                        "data": "tình"
                    },
                    {
                        "startTime": 206059,
                        "endTime": 206419,
                        "data": "ca"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 206550,
                        "endTime": 207630,
                        "data": "Ngàn ánh sao vụt qua "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 207630,
                        "endTime": 210000,
                        "data": "Nhẹ ôm lấy em "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 210320,
                        "endTime": 210350,
                        "data": "Cầm"
                    },
                    {
                        "startTime": 210640,
                        "endTime": 211150,
                        "data": "tay"
                    },
                    {
                        "startTime": 211150,
                        "endTime": 211169,
                        "data": "anh"
                    },
                    {
                        "startTime": 211890,
                        "endTime": 212269,
                        "data": "dựa"
                    },
                    {
                        "startTime": 212269,
                        "endTime": 212439,
                        "data": "vai"
                    },
                    {
                        "startTime": 212479,
                        "endTime": 212749,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 213269,
                        "endTime": 213299,
                        "data": "Kề"
                    },
                    {
                        "startTime": 214250,
                        "endTime": 214329,
                        "data": "bên"
                    },
                    {
                        "startTime": 214329,
                        "endTime": 214349,
                        "data": "anh"
                    },
                    {
                        "startTime": 214349,
                        "endTime": 214389,
                        "data": "nơi"
                    },
                    {
                        "startTime": 214389,
                        "endTime": 214679,
                        "data": "này"
                    },
                    {
                        "startTime": 214679,
                        "endTime": 214789,
                        "data": "có"
                    },
                    {
                        "startTime": 214789,
                        "endTime": 214809,
                        "data": "anh"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 215560,
                        "endTime": 217000,
                        "data": "Khép đôi mi thật lâu "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 217000,
                        "endTime": 218100,
                        "data": "Nguyện mãi bên cạnh nhau "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 218100,
                        "endTime": 220860,
                        "data": "Yêu say đắm như ngày đầu"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 220860,
                        "endTime": 224010,
                        "data": "Mùa xuân đến bình yên "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 223939,
                        "endTime": 224409,
                        "data": "Cho"
                    },
                    {
                        "startTime": 224409,
                        "endTime": 224449,
                        "data": "anh"
                    },
                    {
                        "startTime": 224449,
                        "endTime": 224479,
                        "data": "những"
                    },
                    {
                        "startTime": 224949,
                        "endTime": 225370,
                        "data": "giấc"
                    },
                    {
                        "startTime": 225370,
                        "endTime": 225389,
                        "data": "mơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 225939,
                        "endTime": 226299,
                        "data": "Hạ"
                    },
                    {
                        "startTime": 226569,
                        "endTime": 226599,
                        "data": "lưu"
                    },
                    {
                        "startTime": 226599,
                        "endTime": 226899,
                        "data": "giữ"
                    },
                    {
                        "startTime": 226899,
                        "endTime": 226929,
                        "data": "ngày"
                    },
                    {
                        "startTime": 226929,
                        "endTime": 226949,
                        "data": "mưa"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 229189,
                        "endTime": 229339,
                        "data": "Ngọt"
                    },
                    {
                        "startTime": 229529,
                        "endTime": 229919,
                        "data": "ngào"
                    },
                    {
                        "startTime": 231089,
                        "endTime": 231119,
                        "data": "nên"
                    },
                    {
                        "startTime": 231119,
                        "endTime": 231139,
                        "data": "thơ"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 231260,
                        "endTime": 234320,
                        "data": "Mùa thu lá vàng rơi "
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 234459,
                        "endTime": 234699,
                        "data": "Đông"
                    },
                    {
                        "startTime": 234699,
                        "endTime": 234849,
                        "data": "sang"
                    },
                    {
                        "startTime": 235119,
                        "endTime": 235309,
                        "data": "anh"
                    },
                    {
                        "startTime": 235419,
                        "endTime": 235779,
                        "data": "nhớ"
                    },
                    {
                        "startTime": 235799,
                        "endTime": 236309,
                        "data": "em"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 236989,
                        "endTime": 237019,
                        "data": "Tình"
                    },
                    {
                        "startTime": 237019,
                        "endTime": 237039,
                        "data": "yêu"
                    },
                    {
                        "startTime": 237039,
                        "endTime": 237460,
                        "data": "bé"
                    },
                    {
                        "startTime": 237460,
                        "endTime": 238049,
                        "data": "nhỏ"
                    },
                    {
                        "startTime": 239010,
                        "endTime": 239119,
                        "data": "xin"
                    }
                ]
            },
            {
                "words": [
                    {
                        "startTime": 239609,
                        "endTime": 240000,
                        "data": "Dành"
                    },
                    {
                        "startTime": 240000,
                        "endTime": 240259,
                        "data": "tặng"
                    },
                    {
                        "startTime": 240259,
                        "endTime": 240289,
                        "data": "riêng"
                    },
                    {
                        "startTime": 241599,
                        "endTime": 241979,
                        "data": "em"
                    }
                ]
            }
        ],
        "file": "https://static-zmp3.zmdcdn.me/lyrics/2017/04/10/437fd8dab336d63566e90d61e2dde4ea_1075841896.lrc",
        "enabledVideoBG": true,
        "streamingUrl": "https://mcloud-bf-s7-mv-zmp3.zmdcdn.me/twd3UNTfVuQ/1ca4df094f4da613ff5c/fc0b44394d7ca422fd6d/1080/Noi-Nay-Co-Anh.mp4?authen=exp=1720968101~acl=/twd3UNTfVuQ/*~hmac=24b94d5e66531fb1f2a92ffb29af3bd1",
        "defaultIBGUrls": [
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/e/0/bbe01e4bf6d8e23101fcb6db44df311d.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg",
            "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg"
        ],
        "BGMode": 0
    },
    "timestamp": 1720796915576
}
console.log(object);