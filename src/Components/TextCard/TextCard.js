import React, { Component } from 'react';
import './TextCard.css';

function TextCard({props}){
	return (
		<div className="TextCardContaineer">
			<ul>
				{props.map((item, id) => {
					return (
						<li>
							<div className="TextCardCard">
								<div className="TextCardCardImage">
									<img src={item.img} alt={item.text} />
								</div>
								<div className="TextCardCardText"><span>{item.text}</span></div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default TextCard;