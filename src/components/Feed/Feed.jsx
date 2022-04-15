import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import InputBox from './InputBox'
import { db } from '../../Firebase/firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import FlipMove from 'react-flip-move'
function Feed() {

      const user = useSelector(selectUser)

      const [input, setInput] = useState('')
      const [posts, setPosts] = useState([])

      useEffect(() => {
            db.collection('posts')
                  .orderBy('timestamp', 'desc')
                  .onSnapshot(snapshot => {
                  setPosts(snapshot.docs.map(doc => (
                              {
                                    id: doc.id,
                                    data: doc.data()
                              }
                        )))
                  })
      }, [])

      const sendPost = e => {
            e.preventDefault()

            db.collection('posts').add({
                  name: user.displayName,
                  description: user.email,
                  message: input,
                  photoUrl: user.photoUrl || '',
                  timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

            setInput('')
      }
      return (
            <div className='flex-[0.6] mx-5'>
                  {/* Inputbox */}
                  <InputBox sendPost={sendPost} input={input} setInput={setInput} />

                  {/* Posts */}
                  <FlipMove>
                        {posts && posts.map(({id, data: {name, description, message, photoUrl}}) => (
                              <Post
                                    key={id}
                                    name={name}
                                    description={description}
                                    message={message}
                                    photoUrl={photoUrl}
                              />
                        ))}
                  </FlipMove>
                  
            </div>      
  )
}

export default Feed