import React from "react";
import data from "../../data";

const PropsEx2 = () => {
    return (
        <main className="container">
            <ul className="comments-container">
                {
                    data.map((eachComment) => {
                        const {id,email,name,body } =eachComment;
                        return(
                            <li key={id} className="comment">
                                <div className="comments-header">
                                    <h3 className="email">email{email}</h3>
                                    <h3 className="name">name{name}</h3>
                                </div>
                                <div className="message">{body}</div>
                            </li>
                        )
                    })
                }
                {/* <li className="comment">
                <div className="comments-header">
                    <h3 className="email">adakasnr@gmail.com</h3>
                    <h3 className="name">Siva</h3>
                </div>
                <p className="message">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
                </p>
            </li> */}
            </ul>
        </main>)
}

export default PropsEx2