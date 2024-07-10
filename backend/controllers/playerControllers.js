import mongoose from "mongoose"
import { PlayerSchema } from "../models/playerModel"

const Player = mongoose.model("Player", PlayerSchema)

export const addNewPlayer = async (req, res) => {
	let newPlayer = new Player(req.body)

	try {
		const player = await newPlayer.save()
		res.json(player)
	} catch (error) {
		res.send(error)
	}
}

export const getPlayers = async (req, res) => {
	try {
		const players = await Player.find({})
		res.json(players)
	} catch (error) {
		res.send(error)
	}
}

export const getPlayerWithId = async (req, res) => {
	try {
		const player = await Player.findById(req.params.PlayerId)
		res.json(player)
	} catch (error) {
		res.send(error)
	}
}

export const updatePlayer = async (req, res) => {
	try {
		const player = await Player.findOneAndUpdate(
			{ _id: req.params.PlayerId },
			req.body,
			{ new: ture }
		)
		res.json(player)
	} catch (error) {
		res.send(error)
	}
}

export const deletePlayer = async (req, res) => {
	try {
		await Player.deleteOne({ _id: req.params.PlayerId})
		res.json({message: 'Successfully deleted player'})
	} catch (error) {
		res.send(error)
	}
}
