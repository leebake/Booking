package com.kl.starter.role;

import com.kl.starter.user.User;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@EqualsAndHashCode(exclude = { "id", "user" })
@ToString
@Getter
@Setter
@Entity
public class Role {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private RoleName rolename;

	@JoinColumn(name = "user_id", nullable = false)
	@ManyToOne
	private User user;
}
