import { sessions } from '../sessions'

export const logout = async (userSission) => {
	sessions.remove(userSission)
}
