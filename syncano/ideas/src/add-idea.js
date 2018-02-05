import Syncano from '@syncano/core'

export default (ctx) => {
  const {data, response} = new Syncano(ctx)

  if (ctx.args.title && ctx.args.short_description) {
    data.ideas.create({title: ctx.args.title, short_description: ctx.args.short_description})
    .then(newIdea=> {
      response.json({
        message: newIdea
      })
    })
    
  } else {
    response.json({
      message: 'You have to send "title" and "short_description" arguments!'
    }, 400)
  }
}
