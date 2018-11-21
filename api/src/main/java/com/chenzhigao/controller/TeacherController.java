package com.chenzhigao.controller;

import com.chenzhigao.repository.Teacher;
import com.chenzhigao.repository.TeacherRepository;
import com.chenzhigao.service.TeacherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/Teacher")
public class TeacherController {
    private final static Logger logger = LoggerFactory.getLogger(TeacherController.class.getName());

    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private TeacherService teacherService;

    @GetMapping("/")
    public List<Teacher> getAll() {
        List<Teacher> teachers = (List<Teacher>) teacherRepository.findAll();
        return teachers;
    }

    @GetMapping("/{id}")
    public Teacher get(@PathVariable Long id) {
        Teacher teacher = teacherRepository.findOne(id);
        return teacher;
    }

    @PostMapping("/")
    public Teacher save(@RequestBody Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    // 定义一个put路由来更新数据
    @PutMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody Teacher teacher) {
        teacherService.update(id, teacher);
        return;
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        teacherService.delete(id);
    }

    @PostMapping("/login")
    public void login(@RequestBody Teacher teacher, HttpServletResponse httpServletResponse) {
        // 用户登陆
        if (teacherService.login(teacher)) {
            logger.info("登录成功");
        } else {
            httpServletResponse.setStatus(401);
            logger.info("登录失败");
        }
    }
}
