package com.kl.starter.support;

import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.kl.starter.AppConfig;
import com.kl.starter.DatabaseConfig;
import com.kl.starter.SecurityConfig;
import com.kl.starter.StarterProfiles;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = { AppConfig.class, DatabaseConfig.class, SecurityConfig.class })
@WebIntegrationTest
@ActiveProfiles(StarterProfiles.TEST)
public abstract class AbstractWebIntegrationTest {

}
