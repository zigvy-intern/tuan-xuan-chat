import Chatkit from '@pusher/chatkit-server';

export const tokenUrl = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/1ab9bae1-a778-478c-a702-7a688c5af431/token";
export const instanceLocator = "v1:us1:1ab9bae1-a778-478c-a702-7a688c5af431";
const secretKey= "9ee902b4-0ccf-4ff6-b850-e419d17e0fd8:4Z/kfnLfhfR6El4R2m+GzndiLbp9ovgnKoSgpVwWMEE="

export const chatkit = new Chatkit({
    instanceLocator: instanceLocator,
    key: secretKey,
  })
  
getUser= (id)=> 
{
  chatkit.getUser({
    id
  })
    .then(user => {
      console.log('got a user', user)
      return user

    })
    .catch(err => console.error(err))
  }
export {getUser}