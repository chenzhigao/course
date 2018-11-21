package com.chenzhigao.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import static org.assertj.core.api.Assertions.assertThat;

// 这两条注解声明测试基于SpringBoot
@SpringBootTest
@RunWith(SpringRunner.class)
public class TeacherRepositoryTest {
    // 自动装配TeacherRepository的对象
    @Autowired
    private TeacherRepository teacherRepository;

    // @Test声明这个方法是一个单元测试方法
    @Test
    public void saveTest() {
        teacherRepository.save(new Teacher());
    }

    @Test
    public void findAllTest() {
        List<Teacher> teachers = (List<Teacher>) teacherRepository.findAll();
        assertThat(teachers.size()).isEqualTo(0);
    }
}