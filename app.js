/* 基本的な書き方
・イベント
　$('セレクタ').メソッド(引数);
　　　セレクタ → id, class, タグ
　id = #idName, class = .className, tag = tagName

・css
　$('セレクタ').css('プロパティ名', 値);
　あんま使わない

・this → イベントの発生元
*/


// JSでいうDOMContentLoadedみたいなもの
// Text() = テキスト内容を取得　/　Text('hoge') = テキストにhogeを追加
// val() ← formに入力された内容を取得
// 
$(function() {
  console.log($('#btn').parent().html());
  console.log($('#btn').html());
  console.log($('#btn').text('テキスト'));

  $('#btn').on('click', function() {
    console.log('ボタンがクリックされました')

    // let btn = $('<button>');
    // btn.text('後ろに追加');

// メソッドチェーン
    let btn = $('<button>').text('後ろに追加').attr('href', 'hogehoge');

    $(this).before('<button>前に追加</button>');
    $(this).after(btn);
    $(this).prepend('子要素　前');
    $(this).append('子要素　後ろ');

    $(this).addClass('add');
    $(this).removeClass('add');
    $(this).toggleClass('add');

    $(this).css('color', 'blue');

    $('.hoge').fadeOut(3000);
    // ミリ秒単位　1000ミリ秒 = 3秒

  })

  $('#btn3').on('click', function() {
    $('.hoge').fadeIn(1000);
  })


  $('#btn').on('mouseover', function() {
    console.log('マウスオーバーされました')
  })

  $('#btn').on('mouseleave', function() {
    console.log('マウスが離れました')
  })


  // クリックした
  // onの方を使ってもらえればOK
  $('#btn2').on('click', addLink)
  // この書き方もある　→　$('#btn2').click(addLink);
  

  function addLink() {
    // ユーザーが入力した内容を取得
    let url = $('#url').val();
    let site = $('#site').val();

    // 追加する要素を作る 
    // aタグ href = url テキスト = site
    let anchor = $('<a>').text(site).attr('href', url);
    console.log(anchor);

    // 追加する
    $('form').after(anchor);
  }
   

});


