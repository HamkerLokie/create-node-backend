import { asyncHandler, ApiResponse } from '../services/asyncHandler.js'

const loginUser = asyncHandler(async (req, res) => {
  let accessToken, refreshToken
  const options = {
    httpOnly: true,
    secure: true
  }
  return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          accessToken,
          refreshToken
        },
        'User LoggedIn Successfully'
      )
    )
})

export { loginUser }
