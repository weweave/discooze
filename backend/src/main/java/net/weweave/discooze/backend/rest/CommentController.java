package net.weweave.discooze.backend.rest;

import net.weweave.discooze.backend.domain.Comment;
import net.weweave.discooze.backend.domain.Panel;
import net.weweave.discooze.backend.rest.request.CommentPublishRequest;
import net.weweave.discooze.backend.service.CommentRepository;
import net.weweave.discooze.backend.service.PanelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.EntityLinks;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.security.Principal;
import java.util.UUID;

@RepositoryRestController
public class CommentController extends BaseController {
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PanelRepository panelRepository;

    @Autowired
    private EntityLinks entityLinks;

    @PreAuthorize("hasRole('ROLE_USER')")
    @RequestMapping(method = RequestMethod.POST, value = "/comments/publish")
    @CacheEvict(value = "commentByPanelId", allEntries = true)
    public ResponseEntity<Resource<Comment>> publish(@RequestBody CommentPublishRequest body, Principal principal) {
        Panel panel = this.panelRepository.findOne(UUID.fromString(body.getPanelId()));
        if (panel == null) {
            return ResponseEntity.badRequest().build();
        }
        Comment comment = new Comment();
        comment.setText(body.getText());
        comment.setAuthor(this.getRequestUser(principal));
        comment.setPanel(panel);
        comment = this.commentRepository.save(comment);
        Link selfLink = this.entityLinks.linkFor(Comment.class).slash(comment.getId()).withSelfRel();
        Resource<Comment> result = new Resource<>(comment);
        result.add(selfLink);
        return ResponseEntity.ok(result);
    }
}
