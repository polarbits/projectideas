import Syncano from '@syncano/core'
// import dotenv from 'dotenv';


export default (ctx) => {
  const {data, response} = new Syncano(ctx)
  // dotenv.config();

  if (ctx.args.title && ctx.args.short_description) {
    console.log('add-idea socket hit')
    //add slug https://github.com/dodo/node-slug
    data.ideas.create({title: ctx.args.title, short_description: ctx.args.short_description})
    .then(newIdea=> {
     console.log(newIdea)
    })
    .then(() =>
    response.json({message:'Idea added'},200)
  )
  } else {
    response.json({
      message: 'You have to send "title" and "short_description" arguments!'
    }, 400)
  }
}
