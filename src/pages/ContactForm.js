import React, {useState} from 'react'
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo';
import Layout from '../component/layout'
import { graphql,useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const CONTACT_MUTATION = gql `
  mutation CreateSubmissionMutation($clientMutationId: String!, $firstName: String!, $lastName: String!,$message: String!){
    createSubmission(input: {clientMutationId: $clientMutationId, firstName: $firstName, lastName: $lastName,message: $message}) {
      success
      data
    }
  }
  
`
//
const ContactForm = ({children}) => {
    const [firstNameValue,
        setFirstNameValue] = useState('')
    const [lastNameValue,
        setLastNameValue] = useState('')
    const [messageValue,
        setMessageValue] = useState('')
    const {image} = useStaticQuery(graphql `
        query {
          image: file(relativePath: { eq: "imagecontactform.jpg" }) {
            sharp: childImageSharp {
              fixed (width: 400, height: 300){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `)

    return (
            <Layout >
                <div className="flex flex-row max-w-5xl mx-auto my-16 shadow-2xl rounded-br-lg rounded-bl-lg">

                <div className="bg-gradient-to-b from-indigo-300 to-indigo-100 rounded-bl-lg rounded-tl-lg">
                    <Img className="rounded-tl-lg" fixed={image.sharp.fixed}/>
                    <div className="mx-4 my-2 text-xl font-sans">you can find us here</div>
                    <div className="mx-4 my-2 text-xl font-sans">sample address</div>
                    <div className="mx-4 my-2 text-xl font-sans">Tel : 09374103615</div>

                </div>

                <div className="bg-gradient-to-r from-blue-700 to-indigo-200 text-white w-full rounded-br-lg rounded-tr-lg">
                    <h1 className="text-2xl font-medium font-sans text-center my-4">Contact form</h1>
                    <Mutation mutation={CONTACT_MUTATION}>
                        {(createSubmission, {loading, error, data}) => (
                            <div>
                                <form
                                    onSubmit={async event => {
                                    event.preventDefault()
                                    createSubmission({
                                        variables: {
                                            clientMutationId: 'example',
                                            firstName: firstNameValue,
                                            lastName: lastNameValue,
                                            message: messageValue
                                        }
                                    })
                                }}>
                                    <div className="text-center my-4">CONNECTING WITH US</div>
                                    <div className="text-center my-4">Please fill in your information</div>
                                    <div className="my-8 ml-8">
                                        <label className="" htmlFor='firstNameInput'>Your Name :
                                        </label>
                                        <input
                                            placeholder="First Name"
                                            className="border rounded px-2 py-1 text-black focus:outline-none mx-4 w-36"
                                            id="firstNameValue"
                                            value={firstNameValue}
                                            onChange={e => {
                                            setFirstNameValue(e.target.value)
                                        }}/>
                                    
                                    
                                      
                                        <input
                                        className="border rounded px-2 py-1 text-black focus:outline-none rounded mx-4 w-36"
                                            placeholder="Last Name"
                                            id='lastNameInput'
                                            value={lastNameValue}
                                            onChange={e => {
                                            setLastNameValue(e.target.value)
                                        }}/>
                                        </div>
                                    
                                    <div className="my-8 ml-8">
                                        <label className="ml-0 pl-0" htmlFor='cs'>Your Email :
                                        </label>
                                        <input className="text-black focus:outline-none rounded pl-2 pr-3 py-1 mx-5 w-36" placeholder="your@gmail.com"/>
                                    </div>
                                    <div className="my-8 ml-8 ">
                                        <label className='' htmlFor='messageInput'>Message :
                                        </label>
                                        <textarea
                                        className="resize text-black focus:outline-none rounded mx-4 px-4 pt-1 w-2/6 h-24 absolute "
                                        placeholder="Message ...."
                                            id='messageInput'
                                            value={messageValue}
                                            onChange={e => {
                                            setMessageValue(e.target.value)
                                        }}></textarea>
                                    </div>
                                    <div >
                                        <button className="border  hover:bg-blue-800 rounded hover:font-bold focus:outline-none mx-8 mt-16 mb-4 px-2 py-1" type="submit">Send it!</button>
                                    </div>

                                </form>
                                <hr className="mx-16 mt-4 border-t" />
                                <div className='p-6 m-4 '>
                                    {loading && <p className=' font-semibold text-2xl'>Loading...</p>}
                                    {error && (
                                        <p className='text-red-700 font-semibold text-2xl'>An unknown error has occured, please try again later...</p>
                                    )}
                                    {data && <p className='text-yellow-600 font-semibold text-2xl'>yeah its ok</p>}
                                </div>

                            </div>
                        )}

                    </Mutation>
                </div>
                </div>
            </Layout>
    )
}

export default ContactForm
