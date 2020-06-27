require('dotenv').config()
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const path = require('path')
const typeDefs = require('./types')
const resolvers = require('./resolvers')

const port = process.env.PORT
// const context = async ({}) => ({})

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers
})

const app = express()
apolloServer.applyMiddleware({app, cors: false})

if(process.env.NODE_ENV == 'development') {
	app.use('/', express.static(path.join(__dirname, '../public')))
	app.get('*', (_req, res) => { res.sendFile(path.join(__dirname, '../public', 'index.html'))})
}

app.listen(port, (err) => {
	if (err) throw err
	console.warn(`> 🚀 Apollo GraphQL Server ready on ${process.env.URL}${apolloServer.graphqlPath}`)
})
