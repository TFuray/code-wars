/// <reference path="./global.d.ts" />

import { normalize } from "path"

// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  const scoreBoard = {
    "The Best Ever" : 1000000,
  }
  return scoreBoard
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
// @ts-ignore
export function addPlayer(scoreBoard, player, score) {
  const key = player
  scoreBoard[key] = score
  return scoreBoard
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
// @ts-ignore
export function removePlayer(scoreBoard, player) {
  const key = player
  delete scoreBoard[key]
  return scoreBoard
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
// @ts-ignore
export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] = scoreBoard[player] + points
  return scoreBoard
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
// @ts-ignore
export function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
    scoreBoard[key] = scoreBoard[key] + 100
  }
  return scoreBoard
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
// @ts-ignore
export function normalizeScore(params) {
  return params.normalizeFunction(params.score)
}
