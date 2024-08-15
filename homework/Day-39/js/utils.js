function calculateReadingTime(text) {
  var wordsPerMinute = 200;
  var wordsArray = text.trim().split(/\s+/);
  var numberOfWords = wordsArray.length;

  if (numberOfWords <= 100) {
    var wordsPerSecond = wordsPerMinute / 60;
    var readingTimeSeconds = Math.ceil(numberOfWords / wordsPerSecond);
    return `${readingTimeSeconds} giây`;
  } else {
    var readingTimeMinutes = Math.ceil(numberOfWords / wordsPerMinute);
    return `${readingTimeMinutes} phút`;
  }
}

function extractYouTubeIDs(content) {
  var videoIDs = [];
  var startIndex = 0;
  while (
    content.includes("youtube.com/watch?v=", startIndex) ||
    content.includes("youtu.be/", startIndex)
  ) {
    if (content.includes("youtube.com/watch?v=", startIndex)) {
      startIndex = content.indexOf("youtube.com/watch?v=", startIndex) + 20;
      var endIndex = content.indexOf(" ", startIndex);
      if (endIndex === -1) endIndex = content.length;
      videoIDs.push(content.substring(startIndex, endIndex));
    } else if (content.includes("youtu.be/", startIndex)) {
      startIndex = content.indexOf("youtu.be/", startIndex) + 9;
      var endIndex = content.indexOf(" ", startIndex);
      if (endIndex === -1) endIndex = content.length;
      videoIDs.push(content.substring(startIndex, endIndex));
    }
  }
  return videoIDs.map(function (id) {
    return id.replace(/[^\w-]/g, "");
  });
}

function getTime(times) {
  var now = Date.now();
  var eventTime = Date.parse(times);
  var timeBefore = (now - eventTime) / 1000;
  var days = Math.ceil(timeBefore / 86400);
  var date1 = new Date(times);
  var hour = date1.getHours();
  var minutes = date1.getMinutes();
  return {
    days: days,
    hour: hour,
    minutes: minutes,
  };
}

export { getTime, extractYouTubeIDs, calculateReadingTime };
