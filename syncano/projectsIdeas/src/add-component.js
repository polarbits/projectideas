import Syncano from '@syncano/core'

export default (ctx) => {
  const {data, response} = new Syncano(ctx)

  if (ctx.args.component_type && ctx.args.component_content) {
    console.log('add-component socket hit')
    data.component.create({component_type: ctx.args.component_type, component_content: ctx.args.component_content})
    .then(newComponent=> {
     console.log(newComponent)
    })
    .then(() =>
    response.json({message:'component added'},200)
  )
  } else {
    response.json({
      message: 'You have to send "title" and "short_description" arguments!'
    }, 400)
  }
}
