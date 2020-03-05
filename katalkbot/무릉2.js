const scriptName = "무릉.js";
const room_name = ["메이플스토리 아케인 친목"];  

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
   if (room_name.indexOf(room) != -1 && msg.indexOf('!무릉') != -1) {
      var murung = msg.split(' ');
      var url = Utils.getWebText("https://maple.gg/u/" + murung[1]);
      if (url.indexOf('검색결과가 없습니다.') != -1) {
         replier.reply('[' + murung[1] + ']\n' + '존재하지 않는 캐릭터 입니다.');
         return;
      }
      var data = url.split('text-white">')[3].split('더시드')[0].replace(/(<([^>]+)>)/g, "");
      data = data.replace(/ /gi, '');
      data = data.replace(/\n/gi, '');
      if (data.indexOf('기록이없습니다.') != -1) {
         if (data.indexOf('예전') != -1) {
            var data2 = url.split('old-dojang')[1].split('예전')[0];
            data2 = data2.replace(/(<([^>]+)>)/g, "");
            data2 = data2.replace(/ /gi, '');
            data2 = data2.replace(/\n/gi, '');

            var info = data2.split('Lv.')[1].split('기준일:')[0];
            var floor = data2.split('title="')[1].split('층')[0];
            var time = data2.split('(')[1].split(')')[0];
            var date = data2.split('기준일:')[1].split('">')[0];
            replier.reply('[' + murung[1] + ']\nLv.' + info + '\n기록: ' + floor + '층 (예전 무릉)\n시간: ' + time + '\n날짜: ' + date);

         } else {
            replier.reply('[' + murung[1] + ']\n' + '기록이 없습니다');
            return;
         }

      } else {
         if (data.indexOf('예전') != -1) {

            var info = data.split('Lv.')[2].split('월드')[0];
            var floor = data.split('록')[1].split('층')[0];
            var time = data.split('층')[1].split('초')[0];
            var date = data.split('기준일:')[2];
            replier.reply('[' + murung[1] + ']\nLv.' + info + '\n기록: ' + floor + '층\n시간: ' + time + '초\n날짜: ' + date);
         } else {
            var info = data.split('Lv.')[1].split('월드')[0];
            var floor = data.split('록')[1].split('층')[0];
            var time = data.split('층')[1].split('초')[0];
            var date = data.split('기준일:')[1];
            replier.reply('[' + murung[1] + ']\nLv.' + info + '\n기록: ' + floor + '층\n시간: ' + time + '초\n날짜: ' + date);
         }
      }
   }
}