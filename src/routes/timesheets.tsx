import { createFileRoute } from '@tanstack/react-router'
import Timesheets from '../pages/Timesheets'

export const Route = createFileRoute('/timesheets')({
    component: Timesheets,
})
