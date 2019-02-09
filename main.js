var botui = new BotUI('hello-world');

function deal_with_answer(answer)
{
    botui.message.add({
        content: 'You said: ' + answer.value
      });
}

function loop_conversation()
{
    botui.action.text({
      action: {
        placeholder: 'Enter your text here'
      }
    }).then(deal_with_answer)
    .then(loop_conversation);
}

function main()
{
      botui.message.add({
        content: 'Hello World from bot!'
      }).then(loop_conversation);
}
      
main(); 