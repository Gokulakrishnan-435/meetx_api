export const users={
    post:'CALL sp_post_users(?,?,?,?)',
    login:'CALL sp_login_user(?)'
}

export const booking={
    post:'CALL sp_post_booking(?,?)',
    get:'CALL sp_get_booking(?)'
}

export const activity={
    get:'CALL sp_get_activity()'
}