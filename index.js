// expecting time to be a string in the format like '8:15' or '12:30'
const numberMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "half",
};

function convertTimeToWords(time) {
    if (time === "0:00") return "midnight";
    if (time === "12:00") return "midday";

    const split = time.split(":");
    const hour = Number(split[0]);
    const hourName = numberMap[hour];
    const minutes = Number(split[1]);

    if (minutes === 0) return `${hourName} o'clock`;
    if (minutes > 30) {
        const nextHourName = numberMap[hour + 1];
        return getWords(60 - minutes, nextHourName, "to");
    }
    return getWords(minutes, hourName, "past");
}

function getWords(minutes, hourName, prefix) {
    if (minutes > 20 && minutes < 30) {
        return `twenty ${numberMap[minutes - 20]} ${prefix} ${hourName}`;
    }
    return `${numberMap[minutes]} ${prefix} ${hourName}`;
}


module.exports = { convertTimeToWords };
