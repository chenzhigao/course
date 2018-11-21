package com.chenzhigao.service;

import com.chenzhigao.repository.Teacher;
import com.chenzhigao.repository.TeacherRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
public class TeacherServiceImpl implements TeacherService {
    private final static Logger logger = LoggerFactory.getLogger(TeacherServiceImpl.class.getName());

    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    HttpSession httpSession;


    @Override
    public void update(Long id, Teacher newTeacher) {
        Teacher oldTeacher = teacherRepository.findOne(id);
        // 依次更新每个字段
        oldTeacher.setName(newTeacher.getName());
        oldTeacher.setUsername(newTeacher.getUsername());
        oldTeacher.setEmail(newTeacher.getEmail());
        oldTeacher.setSex(newTeacher.getSex());
        // 更新数据表
        teacherRepository.save(oldTeacher);
        return;
    }

    @Override
    public void delete(Long id) {
        teacherRepository.delete(id);
    }

    @Override
    public boolean login(Teacher teacher) {
        logger.debug("获取相关用户");
        Teacher persistTeacher = teacherRepository.findByUsername(teacher.getUsername());
        if (persistTeacher == null) {
            return false;
        }
        if (!persistTeacher.getPassword().equals(teacher.getPassword())){
            return false;
        }
        logger.debug("记录当前用户ID");
        httpSession.setAttribute(TeacherService.TEACHER_ID, persistTeacher.getId());
        logger.debug("写入teacherId");
        teacher.setId(persistTeacher.getId());
        return true;
    }

    @Override
    public Teacher getOneSavedTeacher() {
        Teacher teacher = this.getOneTeacher();
        teacherRepository.save(teacher);
        return teacher;
    }

    private Teacher getOneTeacher() {
        Teacher teacher = new Teacher();
        return teacher;
    }
}
