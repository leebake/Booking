package com.kl.starter.user;

import java.util.List;

import com.kl.starter.role.RoleName;

public interface UserService {

	void createUser(UserDto user, RoleName roleName);

	void updateUser(UserDto user);

	void deleteUser(Integer id);

	UserDto getUser(Integer id);

	List<UserDto> getUsers();

}
