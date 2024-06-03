// TodoServlet.java
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/todos")
public class TodoServlet extends HttpServlet {
  private List<String> tasks = new ArrayList<>();

  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    // Return the list of tasks as JSON
    response.setContentType("application/json");
    PrintWriter writer = response.getWriter();
    writer.println(new ObjectMapper().writeValueAsString(tasks));
  }

  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    // Add a new task from the request body
    String taskText = new ObjectMapper().readValue(request.getInputStream(), String.class);
    tasks.add(taskText);

    // Return the new task as JSON
    response.setContentType("application/json");
    PrintWriter writer = response.getWriter();
    writer.println(new ObjectMapper().writeValueAsString(ImmutableMap.of("text", taskText)));
  }

  @Override
  protected void doPut(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    // Update a task from the request body
    String taskText = new ObjectMapper().readValue(request.getInputStream(), String.class);
    tasks.set(tasks.indexOf(taskText), taskText);

    // Return the updated task as JSON
    response.setContentType("application/json");
    PrintWriter writer = response.getWriter();
    writer.println(new ObjectMapper().writeValueAsString(ImmutableMap.of("text", taskText)));
  }

  @Override
  protected void doDelete(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    // Delete a task from the request body
    String taskText = new ObjectMapper().readValue(request.getInputStream(), String.class);
    tasks.remove(taskText);

    // Return a success message
    response.setContentType("text/plain");
    PrintWriter writer = response.getWriter();
    writer.println("Task deleted successfully");
  }
}