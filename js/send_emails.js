
async function asyncSendEmail(attachment, receiver){
		var subject = "【茂靈2539婚禮茶會內部限定】 " + receiver + "#預購明細";
		const message = await window.Email.send({
			SecureToken : "5068442f-89f8-4c1b-bed7-c3076623b7c0",
			Host: "smtp.elasticemail.com",
			PORT: "2525",
			Username : "mobrei.wedding@gmail.com",
			Password : "7769F2AADB8EE88FC35B999978B83D094B26",
			To : receiver,
			From : "mobrei.wedding@gmail.com",
			Bcc : ["mobrei.wedding@gmail.com"],
			Subject : subject,
			Body : `您好，<br>茂靈2539婚禮茶會的籌備組已收到您的預購下單，附件為您的明細，主辦方與您各持有一份，此為系統自動寄信，不需回覆。<br><br>
			賣場作業預計最快於十一月底、最慢於一月中開始，到時會另外在聯絡平台與您聯絡，也請您屆時留意信箱，感謝。<br>
			<br>
			如有需要進行預購細項的修正，可以直接聯絡主辦方<br><br>
			《One And Only One》 茂靈婚禮茶會籌備組<br>`,
			Attachments : [
				{
					name : "MobRei Wedding " + receiver + "#details.pdf",
					data : attachment
			}]
		});
		return message;
		// if(message==="OK"){
		// }
	}
