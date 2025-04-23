function hideSubgridBasedOnProjectLevel(executionContext) {
    const formContext = executionContext.getFormContext();
    const fieldName = "pfwe_projectlevel";
    
    const updateSubgridVisibility = () => {
        const field = formContext.getAttribute(fieldName);

        if (field) {
            const projectLevel = field.getValue();
            console.log("Project Level: " + projectLevel);

            if (projectLevel === 333160000 || projectLevel === 333160001) {
                formContext.getControl("Subgrid_new_2").setVisible(false);
                console.log("Hiding subgrid for Level 1 or 2");
            } else if (projectLevel === 333160002 || projectLevel === 333160003) {
                formContext.getControl("Subgrid_new_2").setVisible(true); 
                console.log("Showing subgrid for Level 3 or Acquisition");
            } else {
                formContext.getControl("Subgrid_new_2").setVisible(true);
                console.log("Showing subgrid for other levels");
            }
        }
    };

    updateSubgridVisibility();

    const field = formContext.getAttribute(fieldName);
    if (field) {
        field.addOnChange(updateSubgridVisibility);
    }
}
