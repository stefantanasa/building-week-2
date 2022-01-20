// To be done later
const ExperienceForm = (props) => {
  return (
    <Form className={hideForm} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          value={experience.role}
          onChange={(e) => handleInputs("role", e.target.value)}
          required
          placeholder="Position"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          value={experience.company}
          onChange={(e) => handleInputs("company", e.target.value)}
          required
          placeholder="Company name"
        />
      </Form.Group>
      <Form.Group
        required
        className="mb-3"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control
          type="date"
          value={experience.startDate}
          onChange={(e) => handleInputs("startDate", e.target.value)}
          required
          placeholder="Start Date"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="date"
          value={experience.endDate}
          onChange={(e) => handleInputs("endDate", e.target.value)}
          placeholder="End Date"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="textarea"
          value={experience.description}
          onChange={(e) => handleInputs("description", e.target.value)}
          required
          placeholder="Add an description"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          value={experience.area}
          onChange={(e) => handleInputs("area", e.target.value)}
          required
          placeholder="Location. Example:London, UK"
        />
        <FormLabel>Attach a photo</FormLabel>
        <Form.Control
          type="file"
          value={experience.area}
          onChange={(e) => handleInputs("image", e.target.value)}
          required
          placeholder="Attach the logo"
        />
      </Form.Group>
      <Button className="btn   m-2" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ExperienceForm;
