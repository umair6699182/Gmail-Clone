
import email from "../Model/EmailModel.js"


export const emailFunction = async(request , response)=>{
        try {
            const sentEmail = new email(request.body);
            await sentEmail.save();
            response.status(201).json({message: 'Email Saved SuccessFully'});
        } catch (error) {
            response.status(500).json(error);
        }
}

export const getEmails = async( request , response)=>{
        try {
            let emails;
            if(request.params.type === 'bin'){
               emails = await email.find({bin: true})
            } else if(request.params.type === 'allmail'){
                emails = await email.find({})
            }else if(request.params.type === 'starred'){
                emails = await email.find({starred: true , bin: false});
            } else   {
                emails = await email.find({type: request.params.type})
            }

            return response.status(200).json(emails);
        } catch (error) {
            console.log(error)
            response.status(500).json(error.message)
        }
}

export const moveEmailToBin = async(request , response)=>{
    try {
        await email.updateMany({_id : { $in : request.body}} , {$set : {bin: 'true' , starred: 'false' , type: ''}})

        return response.status(200).json("Emails deleted sucessfully");
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message)
    }
}

export const toggleStarredEmails = async(request , response)=>{
        try {
            await email.updateOne({_id: request.body.id} , {$set: {starred: request.body.value}});

            return response.status(200).json("Emails is starred marked");
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message)
        }
}


export const deleteEmails = async(request , response)=>{
    try {
        await email.deleteMany({_id: {$in: request.body}});
        return response.status(200).json("Emails is deleted sucessfully");
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message)
    }
}