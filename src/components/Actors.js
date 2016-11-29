import React from 'react'
import { actors } from '../data'

const Actors = () => {
    return (
        <div>
            <h1>Actors Page</h1>
            {actors.map(a => (
              <div>
                <p>Name: {a.name}</p>
                <p>Movies:</p>
                {a.movies.map(m => (
                  <li>{m}</li>
                ))}
              </div>
            ))}
        </div>
    )
}

module.exports = Actors
