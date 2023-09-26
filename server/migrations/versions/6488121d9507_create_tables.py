"""create tables

Revision ID: 6488121d9507
Revises: 
Create Date: 2023-09-25 21:25:49.360679

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6488121d9507'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('ingredients',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('amount', sa.String(), nullable=True),
    sa.Column('direction', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('recipes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('image_food', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('duration', sa.String(), nullable=True),
    sa.Column('serving', sa.String(), nullable=True),
    sa.Column('review', sa.Integer(), nullable=True),
    sa.Column('mealType', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('_password_hash', sa.String(), nullable=True),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('image_me', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('username')
    )
    op.create_table('recipe_ingredient',
    sa.Column('recipe_id', sa.Integer(), nullable=True),
    sa.Column('ingredient_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['ingredient_id'], ['ingredients.id'], ),
    sa.ForeignKeyConstraint(['recipe_id'], ['recipes.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('recipe_ingredient')
    op.drop_table('users')
    op.drop_table('recipes')
    op.drop_table('ingredients')
    # ### end Alembic commands ###
