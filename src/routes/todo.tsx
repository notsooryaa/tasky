import { createFileRoute } from '@tanstack/react-router'
import Todo from '../pages/Todo'

export const Route = createFileRoute('/todo')({
    component: Todo,
})
