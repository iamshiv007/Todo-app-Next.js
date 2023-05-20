import { TodoItem } from '@/components/ServerComponents'
import React from 'react'

const todos = () => {
  return (
    <div>
        <section className='todosContainer'>
            <TodoItem
            title={"title"}
            description={"description"}
            id={"id"}
            completed={false}
            key={"key"}
            />
        </section>
    </div>
  )
}

export default todos