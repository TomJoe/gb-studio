import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/configureStore";
import { EnginePropSchemaField } from "../../store/features/engine/engineState";
import { enginePropSelectors } from "../../store/features/entities/entitiesState";
import { FormField } from "../library/Forms";
import entitiesActions from "../../store/features/entities/entitiesActions";
import Button from "../library/Button";
import l10n from "../../lib/helpers/l10n";

const { editEngineProp, removeEngineProp } = entitiesActions;

const EnginePropsEditor = () => {
  const dispatch = useDispatch();
  const values = useSelector(enginePropSelectors.selectEntities);
  const schema = useSelector((state: RootState) => state.engine.schema);

  const resetToDefault = (fields: EnginePropSchemaField[]) => () => {
    fields.forEach((field) => {
      dispatch(
        removeEngineProp({
          enginePropId: field.key,
        })
      );
    });
  };

  return (
    <div>
      {schema.map((group) => (
        <section>
          <h2>{group.name}</h2>

          {group.fields.map((field) => (
            <FormField quarterWidth>
              <label>
                {field.name}
                <input
                  value={values[field.key]?.value || ""}
                  placeholder={field.defaultValue}
                  onChange={(e) =>
                    dispatch(
                      editEngineProp({
                        enginePropId: field.key,
                        value: e.currentTarget.value,
                      })
                    )
                  }
                />
              </label>
            </FormField>
          ))}
          <div style={{ marginTop: 30 }}>
            <Button onClick={resetToDefault(group.fields)}>
              {l10n("FIELD_RESTORE_DEFAULT")}
            </Button>
          </div>
        </section>
      ))}
      VALUES<br />
      <pre>{JSON.stringify(values, null, 4)}</pre>
      SCHEMA<br />
      <pre>{JSON.stringify(schema, null, 4)}</pre>
    </div>
  );
};

export default EnginePropsEditor;
