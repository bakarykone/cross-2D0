import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { BAD_REQUEST } from '../../constants/api'

const api = Router()

export default api